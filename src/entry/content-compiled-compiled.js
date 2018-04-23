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

        return React.createElement("div", { className: "table", style: { textDecoration: 'none' } }, React.createElement("span", { className: "link" }, React.createElement(Link, { to: "readOne", onClick: function onClick() {
                return _this.props.changeAppMode('readOne', _this.props.product.id);
            } }, React.createElement("h1", null, this.props.product.name), React.createElement("img", { src: this.props.product.photo, style: { width: 600, height: 330 }, alt: "Poza nu este valabila" }), React.createElement("p", { className: "description" }, this.props.product.description), React.createElement("p", { className: "price" }, "Pret: ", parseFloat(this.props.product.price).toFixed(2), " lei"), React.createElement("p", { className: "category" }, "Genul: ", this.props.product.category_name))), React.createElement("p", null, React.createElement(Link, { to: "update", onClick: function onClick() {
                return _this.props.changeAppMode('update', _this.props.product.id);
            } }, React.createElement("span", { className: "btn btn-primary m-r-1em" }, "Editeaza")), React.createElement(Link, { to: "delete", onClick: function onClick() {
                return _this.props.changeAppMode('delete', _this.props.product.id);
            } }, React.createElement("span", { className: "btn btn-danger" }, "Sterge"))));
    }
});

var ProductsTable = React.createClass({
    displayName: "ProductsTable",

    render: function render() {

        var rows = this.props.products.map(function (product, i) {
            return React.createElement(ProductRow, {
                key: i,
                product: product,
                changeAppMode: this.props.changeAppMode
            });
        }.bind(this));

        return !rows.length ? React.createElement("div", { className: "alert alert-danger" }, "Niciun joc adaugat. Incepe sa adaugi si ele vor aparea aici") : React.createElement("div", null, rows);
    }
});

var TopActionsComponent = React.createClass({
    displayName: "TopActionsComponent",

    render: function render() {
        return React.createElement("div", { className: "create" }, React.createElement(Link, { to: "/create" }, React.createElement("span", { className: "btn btn-primary margin-bottom-1em" }, "Adauga un joc nou")));
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

    componentWillReceiveProps: function componentWillReceiveProps() {

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

        return React.createElement("div", { className: "product" }, React.createElement(IndexLink, { to: "/" }, React.createElement("span", { className: "btn btn-primary margin-bottom-1em" }, "Inapoi")), React.createElement("form", { onSubmit: this.onSave }, React.createElement("table", { className: "table table-bordered table-hover" }, React.createElement("tbody", null, React.createElement("tr", { className: "td-head" }, React.createElement("td", null, this.state.name)), React.createElement("tr", null, React.createElement("td", null, React.createElement("img", { src: this.state.photo, style: { width: 900, height: 420 },
            alt: "Poza nu este valabila" }))), React.createElement("tr", null, React.createElement("td", { className: "td-text" }, "Creat de: ", this.state.publisher_name)), React.createElement("tr", { className: "td-text" }, React.createElement("td", null, this.state.description)), React.createElement("tr", null, React.createElement("td", null, React.createElement("iframe", { width: "900", height: "420", src: this.state.yt_link, frameBorder: "0",
            allowFullScreen: true }))), React.createElement("tr", { className: "td-text" }, React.createElement("td", null, "Pret: ", parseFloat(this.state.price).toFixed(2), " lei")), React.createElement("tr", { className: "td-text" }, React.createElement("td", null, "Genul: ", this.state.category_name)), React.createElement("tr", { className: "td-text" }, React.createElement("td", null, "Demo link : ", React.createElement("a", { href: this.state.link }, this.state.link)))))));
    }
});

var DeleteProductComponent = React.createClass({
    displayName: "DeleteProductComponent",

    componentDidMount: function componentDidMount() {
        $('.page-header h1').text('Delete product');
    },

    onDelete: function onDelete(e) {
        var productId = localStorage.getItem("productId");

        $.post("api/delete_product.php", { del_ids: [productId] });
    },

    render: function render() {

        return React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-md-3" }), React.createElement("div", { className: "col-md-6" }, React.createElement("div", { className: "panel panel-default" }, React.createElement("div", { className: "panel-body text-align-center" }, "Esti sigur ca vrei sa stergi jocul?"), React.createElement("div", { className: "panel-footer clearfix" }, React.createElement("div", { className: "text-align-center" }, React.createElement(Link, { to: "/" }, React.createElement("button", { onClick: this.onDelete,
            className: "btn btn-danger m-r-1em" }, "Da")), React.createElement(IndexLink, { to: "/" }, React.createElement("button", {
            className: "btn btn-primary" }, "Nu")))))), React.createElement("div", { className: "col-md-3" }));
    }
});

var UpdateProductComponent = React.createClass({
    displayName: "UpdateProductComponent",

    getInitialState: function getInitialState() {
        return {
            categories: [],
            selectedCategoryId: 0,
            id: 0,
            name: '',
            description: '',
            price: 0,
            successUpdate: null,
            link: '',
            photo: '',
            yt_link: ''
        };
    },
    componentDidMount: function componentDidMount() {
        this.serverRequestCat = $.get("api/read_all_categories.php", function (categories) {
            this.setState({
                categories: JSON.parse(categories)
            });
        }.bind(this));

        var productId = localStorage.getItem("productId");
        this.serverRequestProd = $.post("api/read_one_product.php", { prod_id: productId }, function (product) {
            var p = JSON.parse(product)[0];
            this.setState({ selectedCategoryId: p.category_id });
            this.setState({ id: p.id });
            this.setState({ name: p.name });
            this.setState({ description: p.description });
            this.setState({ price: p.price });
            this.setState({ link: p.link });
            this.setState({ photo: p.photo });
            this.setState({ yt_link: p.yt_link });
        }.bind(this));

        $('.page-header h1').text('Update product');
    },
    componentWillUnmount: function componentWillUnmount() {
        this.serverRequestCat.abort();
        this.serverRequestProd.abort();
    },
    // handle category change
    onCategoryChange: function onCategoryChange(e) {
        this.setState({ selectedCategoryId: e.target.value });
    },

    // handle name change
    onNameChange: function onNameChange(e) {
        this.setState({ name: e.target.value });
    },

    // handle description change
    onDescriptionChange: function onDescriptionChange(e) {
        this.setState({ description: e.target.value });
    },

    // handle price change
    onPriceChange: function onPriceChange(e) {
        this.setState({ price: e.target.value });
    },

    onLinkChange: function onLinkChange(e) {
        this.setState({ link: e.target.value });
    },

    onPhotoChange: function onPhotoChange(e) {
        this.setState({ photo: e.target.value });
    },

    onYTChange: function onYTChange(e) {
        this.setState({ yt_link: e.target.value });
    },
    onSave: function onSave(e) {
        $.post("api/update_product.php", {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category_id: this.state.selectedCategoryId,
            link: this.state.link,
            photo: this.state.photo,
            yt_link: this.state.yt_link
        }, function (res) {
            this.setState({ successUpdate: res });
        }.bind(this));
        e.preventDefault();
    },
    render: function render() {
        var categoriesOptions = this.state.categories.map(function (category) {
            return React.createElement("option", { key: category.id, value: category.id }, category.name);
        });

        return React.createElement("div", null, this.state.successUpdate == "true" ? React.createElement("div", { className: "alert alert-success" }, "Jocul a fost updatat.") : null, this.state.successUpdate == "false" ? React.createElement("div", { className: "alert alert-danger" }, "Jocul nu a putut fi updatat. Te rugam sa incerci din nou.") : null, React.createElement(IndexLink, { to: "/" }, React.createElement("span", { className: "btn btn-primary margin-bottom-1em" }, "Inapoi")), React.createElement("form", { onSubmit: this.onSave }, React.createElement("table", { className: "table table-bordered table-hover" }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Nume"), React.createElement("td", null, React.createElement("input", {
            type: "text",
            className: "form-control",
            value: this.state.name,
            required: true,
            onChange: this.onNameChange }))), React.createElement("tr", null, React.createElement("td", null, "Descriere"), React.createElement("td", null, React.createElement("textarea", {
            type: "text",
            className: "form-control",
            cols: "100",
            rows: "50",
            required: true,
            value: this.state.description,
            onChange: this.onDescriptionChange }))), React.createElement("tr", null, React.createElement("td", null, "Pret"), React.createElement("td", null, React.createElement("input", {
            type: "number",
            step: "0.01",
            className: "form-control",
            value: this.state.price,
            required: true,
            onChange: this.onPriceChange }))), React.createElement("tr", null, React.createElement("td", null, "Genul"), React.createElement("td", null, React.createElement("select", {
            onChange: this.onCategoryChange,
            className: "form-control",
            value: this.state.selectedCategoryId }, React.createElement("option", { value: "-1" }, "Select category..."), categoriesOptions))), React.createElement("tr", null, React.createElement("td", null, "Demo link"), React.createElement("td", null, React.createElement("input", {
            type: "text",
            className: "form-control",
            value: this.state.link,
            required: true,
            onChange: this.onLinkChange }))), React.createElement("tr", null, React.createElement("td", null, "Poza de coperta"), React.createElement("td", null, React.createElement("input", {
            type: "text",
            className: "form-control",
            value: this.state.photo,
            required: true,
            onChange: this.onPhotoChange }))), React.createElement("tr", null, React.createElement("td", null, "Link spre trailer Youtube"), React.createElement("td", null, React.createElement("input", {
            type: "text",
            className: "form-control",
            value: this.state.yt_link,
            onChange: this.onYTChange }))), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, React.createElement("button", {
            className: "btn btn-primary",
            onClick: this.onSave }, "Salveaza")))))));
    }
});

var CreateProductComponent = React.createClass({
    displayName: "CreateProductComponent",

    getInitialState: function getInitialState() {
        return {
            categories: [],
            selectedCategoryId: -1,
            name: '',
            description: '',
            price: '',
            successCreation: null,
            link: '',
            photo: '',
            yt_link: ''
        };
    },
    componentDidMount: function componentDidMount() {
        this.serverRequest = $.get("api/read_all_categories.php", function (categories) {
            this.setState({
                categories: JSON.parse(categories)
            });
        }.bind(this));

        $('.page-header h1').text('Create product');
    },
    componentWillUnmount: function componentWillUnmount() {
        this.serverRequest.abort();
    },
    // handle category change
    onCategoryChange: function onCategoryChange(e) {
        this.setState({ selectedCategoryId: e.target.value });
    },

    // handle name change
    onNameChange: function onNameChange(e) {
        this.setState({ name: e.target.value });
    },

    // handle description change
    onDescriptionChange: function onDescriptionChange(e) {
        this.setState({ description: e.target.value });
    },

    // handle price change
    onPriceChange: function onPriceChange(e) {
        this.setState({ price: e.target.value });
    },

    onLinkChange: function onLinkChange(e) {
        this.setState({ link: e.target.value });
    },

    onPhotoChange: function onPhotoChange(e) {
        this.setState({ photo: e.target.value });
    },

    onYTChange: function onYTChange(e) {
        this.setState({ yt_link: e.target.value });
    },

    onSave: function onSave(e) {
        $.post("api/create_product.php", {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category_id: this.state.selectedCategoryId,
            link: this.state.link,
            photo: this.state.photo,
            yt_link: this.state.yt_link
        }, function (res) {
            this.setState({ successCreation: res });
            this.setState({ name: "" });
            this.setState({ description: "" });
            this.setState({ price: "" });
            this.setState({ selectedCategoryId: -1 });
            this.setState({ link: "" });
            this.setState({ photo: "" });
            this.setState({ yt_link: "" });
        }.bind(this));
        e.preventDefault();
    },
    render: function render() {

        // make categories as option for the select tag.
        var categoriesOptions = this.state.categories.map(function (category) {
            return React.createElement("option", { key: category.id, value: category.id }, category.name);
        });

        /*
         - tell the user if a product was created
         - tell the user if unable to create product
         - button to go back to products list
         - form to create a product
         */
        return React.createElement("div", null, this.state.successCreation == "true" ? React.createElement("div", { className: "alert alert-success" }, "Jocul a fost salvat.") : null, this.state.successCreation == "false" ? React.createElement("div", { className: "alert alert-danger" }, "Jocul nu a putut fi salvat. Te rugam sa incerci din nou.") : null, React.createElement(IndexLink, { to: "/" }, React.createElement("span", { className: "btn btn-primary margin-bottom-1em" }, "Inapoi")), React.createElement("form", { onSubmit: this.onSave }, React.createElement("table", { className: "table table-bordered table-hover" }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Numele jocului"), React.createElement("td", null, React.createElement("input", {
            type: "text",
            className: "form-control",
            value: this.state.name,
            required: true,
            onChange: this.onNameChange }))), React.createElement("tr", null, React.createElement("td", null, "Descriere"), React.createElement("td", null, React.createElement("textarea", {
            type: "text",
            className: "form-control",
            required: true,
            cols: "100",
            rows: "50",
            value: this.state.description,
            onChange: this.onDescriptionChange }))), React.createElement("tr", null, React.createElement("td", null, "Pret"), React.createElement("td", null, React.createElement("input", {
            type: "number",
            step: "0.01",
            className: "form-control",
            value: this.state.price,
            required: true,
            onChange: this.onPriceChange }))), React.createElement("tr", null, React.createElement("td", null, "Demo link"), React.createElement("td", null, React.createElement("input", {
            type: "text",
            className: "form-control",
            value: this.state.link,
            required: true,
            onChange: this.onLinkChange
        }))), React.createElement("tr", null, React.createElement("td", null, "Genul jocului"), React.createElement("td", null, React.createElement("select", {
            onChange: this.onCategoryChange,
            className: "form-control",
            value: this.state.selectedCategoryId }, React.createElement("option", { value: "-1" }, "Selecteaza genul jocului..."), categoriesOptions))), React.createElement("tr", null, React.createElement("td", null, "Poza de coperta"), React.createElement("td", null, React.createElement("input", {
            type: "text",
            className: "form-control",
            value: this.state.photo,
            required: true,
            onChange: this.onPhotoChange }))), React.createElement("tr", null, React.createElement("td", null, "Link spre trailer Youtube ( Citeste Intrebari frecvente )"), React.createElement("td", null, React.createElement("input", {
            type: "text",
            className: "form-control",
            value: this.state.yt_link,
            required: true,
            onChange: this.onYTChange }))), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, React.createElement("button", {
            className: "btn btn-primary",
            onClick: this.onSave }, "Salveaza")))))));
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
        this.serverRequest = $.get("api/read_all_products.php?", function (products) {
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

        return React.createElement("div", { className: "overflow-hidden" }, React.createElement("h1", null, "Administrare Jocuri"), React.createElement(TopActionsComponent, { changeAppMode: this.changeAppMode }), React.createElement(ProductsTable, {
            products: filteredProducts,
            changeAppMode: this.changeAppMode }));
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
            return React.createElement("div", null, React.createElement("div", { className: "header-container" }, React.createElement("header", { className: "header" }, React.createElement("nav", { className: "header-nav" }, React.createElement("div", { className: "home-call" }, React.createElement("a", { href: "index.php" }, React.createElement("img", { src: "http://i.imgur.com/Wcsj9lo.png?1",
                style: { width: 50, height: 50 }, alt: "" }), "Level Up")), React.createElement("div", { className: "ul-container" }, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", { href: "faq.php" }, "Intrebari frecvente")), React.createElement("li", null, React.createElement("a", { href: "content_newest.php" }, "Vezi toate jocurile")), React.createElement("li", null, React.createElement("a", { href: "../../includes/logout.php" }, "Delogheaza-te")))), React.createElement("div", { className: "menu-wrapper" }, React.createElement("a", { href: "#menu" }, "☰"))))));
        }
    }]);

    return TopBar;
}(React.Component);

var Content = function (_React$Component2) {
    _inherits(Content, _React$Component2);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            return React.createElement("div", { className: "DOM" }, React.createElement(TopBar, null), React.createElement("div", null, React.createElement("div", { className: "middle" }, React.createElement("main", { className: "content" }, React.createElement("div", { className: "main-upper" }, this.props.children)))));
        }
    }]);

    return Content;
}(React.Component);

var _ReactRouter = ReactRouter,
    Router = _ReactRouter.Router,
    Route = _ReactRouter.Route,
    IndexRoute = _ReactRouter.IndexRoute,
    IndexLink = _ReactRouter.IndexLink,
    Link = _ReactRouter.Link,
    browserHistory = _ReactRouter.browserHistory,
    hashHistory = _ReactRouter.hashHistory;

ReactDOM.render(React.createElement(Router, { onUpdate: function onUpdate() {
        return window.scrollTo(0, 0);
    } }, React.createElement(Route, { path: "/", component: Content }, React.createElement(IndexRoute, { component: ReadProductsComponent }), React.createElement(Route, { path: "create", component: CreateProductComponent }), React.createElement(Route, { path: "readOne", component: ReadOneProductComponent }), React.createElement(Route, { path: "update", component: UpdateProductComponent }), React.createElement(Route, { path: "delete", component: DeleteProductComponent }))), document.getElementById('app'));

//# sourceMappingURL=content-compiled.js.map

//# sourceMappingURL=content-compiled-compiled.js.map