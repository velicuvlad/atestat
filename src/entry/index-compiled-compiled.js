"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/*

Please refer to the README for details regarding every object/component here.

*/

var ProductRow = React.createClass({
    displayName: "ProductRow",

    render: function render() {
        var _this = this;

        return React.createElement("div", { className: "" }, React.createElement("span", { className: "link" }, React.createElement(Link, { to: "readOne", onClick: function onClick() {
                return _this.props.changeAppMode('readOne', _this.props.product.id);
            } }, React.createElement("div", { className: "table-main" }, React.createElement("div", { className: "text-description-main" }, React.createElement("h1", null, this.props.product.name), React.createElement("p", { className: "description" }, this.props.product.description), React.createElement("p", { className: "price" }, "Pret: ", parseFloat(this.props.product.price).toFixed(2), " lei"), React.createElement("p", { className: "category" }, "Genul: ", this.props.product.category_name)), React.createElement("div", { className: "image-main" }, React.createElement("img", { src: this.props.product.photo, style: { width: 420, height: 270 },
            alt: "Poza nu este valabila" }))))));
    }
});

var ProductsTable = React.createClass({
    displayName: "ProductsTable",

    render: function render() {

        var rows = this.props.products.map(function (product, i) {
            return React.createElement(ProductRow, {
                key: i,
                product: product,
                changeAppMode: this.props.changeAppMode });
        }.bind(this));

        return !rows.length ? React.createElement("div", { className: "alert alert-danger" }, "Nu a putut fi gasit niciun joc dupa filtrele dumneavoastra.") : React.createElement("div", { className: "lower-main" }, rows);
    }
});

var ReadProductsComponent = React.createClass({
    displayName: "ReadProductsComponent",

    getInitialState: function getInitialState() {
        return {
            products: [],
            currentMode: 'read',
            productId: null
        };
    },
    changeAppMode: function changeAppMode(newMode, productId) {
        this.setState({ currentMode: newMode });

        if (productId !== undefined) {
            this.setState({ productId: productId });
        }
        if (typeof Storage !== "undefined") {
            localStorage.setItem("productId", productId);
        } else {
            alert("Please use a browser that supports LocalStorage.");
        }
    },

    // on mount, fetch all products and stored them as this component's state
    componentDidMount: function componentDidMount() {
        this.serverRequest = $.get("api/read_all_products_main_page.php", function (products) {
            this.setState({
                products: JSON.parse(products)
            });
        }.bind(this));
    },

    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount: function componentWillUnmount() {
        this.serverRequest.abort();
    },

    render: function render() {
        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');

        return React.createElement("div", { className: "overflow-hidden" }, React.createElement("div", { className: "products-header" }, React.createElement("a", { href: "content_newest.php" }, React.createElement("h1", null, "Cele mai noi jocuri"))), React.createElement(ProductsTable, {
            products: filteredProducts,
            changeAppMode: this.changeAppMode }));
    }
});

var ReadOneProductComponent = React.createClass({
    displayName: "ReadOneProductComponent",

    getInitialState: function getInitialState() {
        // make sure that no other values are set
        return {
            id: 0,
            name: '',
            description: '',
            price: 0,
            category_name: '',
            link: '',
            photo: '',
            yt_link: '',
            publisher_name: ''
        };
    },

    // on mount, read one product based on given product ID
    componentDidMount: function componentDidMount() {

        var productId = localStorage.getItem("productId");

        this.serverRequestProd = $.post("api/read_one_product.php", { prod_id: productId }, function (product) {
            var p = JSON.parse(product)[0];
            this.setState({ category_name: p.category_name });
            this.setState({ id: p.id });
            this.setState({ name: p.name });
            this.setState({ description: p.description });
            this.setState({ price: p.price });
            this.setState({ link: p.link });
            this.setState({ photo: p.photo });
            this.setState({ yt_link: p.yt_link });
            this.setState({ publisher_name: p.publisher_name });
        }.bind(this));

        $('.page-header h1').text('Read Product');
    },

    // on unmount, kill fetching the product data in case the request is still pending
    componentWillUnmount: function componentWillUnmount() {
        this.serverRequestProd.abort();
    },

    // show single product data on a table
    render: function render() {
        var _this2 = this;

        return React.createElement("div", { className: "middle" }, React.createElement("main", { className: "content" }, React.createElement("div", { className: "main-upper" }, React.createElement("div", { className: "product-main" }, React.createElement("a", { href: "#",
            onClick: function onClick() {
                return _this2.props.changeAppMode('read');
            },
            className: "btn btn-primary margin-bottom-1em" }, "Inapoi"), React.createElement("form", { onSubmit: this.onSave }, React.createElement("table", { className: "table table-bordered table-hover" }, React.createElement("tbody", null, React.createElement("tr", { className: "td-head" }, React.createElement("td", null, this.state.name)), React.createElement("tr", null, React.createElement("td", null, React.createElement("img", { src: this.state.photo, style: { width: 900, height: 420 },
            alt: "Poza nu este valabila" }))), React.createElement("tr", null, React.createElement("td", { className: "td-text" }, "Creat de: ", this.state.publisher_name)), React.createElement("tr", { className: "td-text" }, React.createElement("td", null, this.state.description)), React.createElement("tr", null, React.createElement("td", null, React.createElement("iframe", { width: "900", height: "420", src: this.state.yt_link, frameBorder: "0",
            allowFullScreen: true }))), React.createElement("tr", { className: "td-text" }, React.createElement("td", null, "Pret: ", parseFloat(this.state.price).toFixed(2), " lei")), React.createElement("tr", { className: "td-text" }, React.createElement("td", null, "Genul: ", this.state.category_name)), React.createElement("tr", { className: "td-text" }, React.createElement("td", null, "Demo link : ", React.createElement("a", { href: this.state.link }, this.state.link))))))))));
    }
});

var TopBar = function (_React$Component) {
    _inherits(TopBar, _React$Component);

    function TopBar() {
        _classCallCheck(this, TopBar);

        return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).apply(this, arguments));
    }

    _createClass(TopBar, [{
        key: "render",
        value: function render() {
            return React.createElement("div", null, React.createElement("div", { className: "header-container" }, React.createElement("header", { className: "header" }, React.createElement("nav", { className: "header-nav" }, React.createElement("div", { className: "home-call" }, React.createElement("a", { href: "index.php" }, React.createElement("img", { src: "logo.png", style: { width: 50, height: 50 }, alt: "" }), "Level Up")), React.createElement("div", { className: "ul-container" }, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", { href: "faq.php" }, "Intrebari frecvente")), React.createElement("li", null, React.createElement("a", { href: "register.php" }, "Inregistrare")), React.createElement("li", null, React.createElement("a", { href: "login.php" }, "Logare")))), React.createElement("div", { className: "menu-wrapper" }, React.createElement("a", { href: "#menu" }, "☰"))))));
        }
    }]);

    return TopBar;
}(React.Component);

var Content = React.createClass({
    displayName: "Content",
    render: function render() {
        return React.createElement("div", { className: "DOM" }, React.createElement(TopBar, null), React.createElement("div", null, React.createElement("div", { className: "middle" }, React.createElement("div", { className: "categories" }, React.createElement("div", { className: "categories_content" }, React.createElement("p", null, "Tipuri de jocuri"), React.createElement("ul", null, React.createElement("a", { href: "content_filtered.php?category_id=1" }, React.createElement("li", null, "Action")), React.createElement("a", { href: "content_filtered.php?category_id=2" }, React.createElement("li", null, "Adventure")), React.createElement("a", { href: "content_filtered.php?category_id=3" }, React.createElement("li", null, "Arcade")), React.createElement("a", { href: "content_filtered.php?category_id=4" }, React.createElement("li", null, "Browser")), React.createElement("a", { href: "content_filtered.php?category_id=5" }, React.createElement("li", null, "Fighting")), React.createElement("a", { href: "content_filtered.php?category_id=6" }, React.createElement("li", null, "Horror")), React.createElement("a", { href: "content_filtered.php?category_id=7" }, React.createElement("li", null, "MMORPG/RPG")), React.createElement("a", { href: "content_filtered.php?category_id=8" }, React.createElement("li", null, "MOBA")), React.createElement("a", { href: "content_filtered.php?category_id=9" }, React.createElement("li", null, "Puzzle")), React.createElement("a", { href: "content_filtered.php?category_id=10" }, React.createElement("li", null, "Racing")), React.createElement("a", { href: "content_filtered.php?category_id=11" }, React.createElement("li", null, "Simulator")), React.createElement("a", { href: "content_filtered.php?category_id=12" }, React.createElement("li", null, "First-Person Shooter")), React.createElement("a", { href: "content_filtered.php?category_id=13" }, React.createElement("li", null, "Third-Person Shooter")), React.createElement("a", { href: "content_filtered.php?category_id=14" }, React.createElement("li", null, "Sports")), React.createElement("a", { href: "content_filtered.php?category_id=15" }, React.createElement("li", null, "Real-Time Strategy")), React.createElement("a", { href: "content_filtered.php?category_id=16" }, React.createElement("li", null, "Turn-Based Strategy")), React.createElement("a", { href: "content_filtered.php?category_id=17" }, React.createElement("li", null, "Sci-Fi"))))), React.createElement("main", { className: "content" }, React.createElement("div", { className: "main-upper" }, React.createElement("div", { className: "slide-div" }, React.createElement("div", { className: "slide-div-container" })), React.createElement("div", { className: "welcome-greeting" }, React.createElement("h1", null, "Bine ai venit!"), React.createElement("p", null, "Bine ai venit pe site-ul nostru. Daca nu esti inregistrat deja, te rugam sa o faci. Poti incepe chiar acum sa cauti jocuri care te-ar interesa"), React.createElement("a", { href: "content.php" }, "Vezi toate jocurile"))), React.createElement("div", { className: "" }, this.props.children)))));
    }
});

var _ReactRouter = ReactRouter,
    Router = _ReactRouter.Router,
    Route = _ReactRouter.Route,
    IndexRoute = _ReactRouter.IndexRoute,
    IndexLink = _ReactRouter.IndexLink,
    Link = _ReactRouter.Link;

ReactDOM.render(React.createElement(Router, { onUpdate: function onUpdate() {
        return window.scrollTo(0, 0);
    } }, React.createElement(Route, { path: "/", component: Content }, React.createElement(IndexRoute, { component: ReadProductsComponent }), React.createElement(Route, { path: "readOne", component: ReadOneProductComponent }))), document.getElementById('app'));

//# sourceMappingURL=index-compiled.js.map

//# sourceMappingURL=index-compiled-compiled.js.map