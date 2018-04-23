'use strict';

var CreateProductComponent = React.createClass({
    displayName: 'CreateProductComponent',


    getInitialState: function getInitialState() {
        return {
            categories: [],
            selectedCategoryId: -1,
            name: '',
            description: '',
            price: '',
            successCreation: null
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

    onSave: function onSave(e) {
        $.post("api/create_product.php", {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category_id: this.state.selectedCategoryId
        }, function (res) {
            this.setState({ successCreation: res });
            this.setState({ name: "" });
            this.setState({ description: "" });
            this.setState({ price: "" });
            this.setState({ selectedCategoryId: -1 });
        }.bind(this));
        e.preventDefault();
    },

    render: function render() {
        var _this = this;

        // make categories as option for the select tag.
        var categoriesOptions = this.state.categories.map(function (category) {
            return React.createElement(
                'option',
                { key: category.id, value: category.id },
                category.name
            );
        });

        /*
         - tell the user if a product was created
         - tell the user if unable to create product
         - button to go back to products list
         - form to create a product
         */
        return React.createElement(
            'div',
            null,
            this.state.successCreation == "true" ? React.createElement(
                'div',
                { className: 'alert alert-success' },
                'Product was saved.'
            ) : null,
            this.state.successCreation == "false" ? React.createElement(
                'div',
                { className: 'alert alert-danger' },
                'Unable to save product. Please try again.'
            ) : null,
            React.createElement(
                'a',
                { href: '#',
                    onClick: function onClick() {
                        return _this.props.changeAppMode('read');
                    },
                    className: 'btn btn-primary margin-bottom-1em' },
                ' Read Products'
            ),
            React.createElement(
                'form',
                { onSubmit: this.onSave },
                React.createElement(
                    'table',
                    { className: 'table table-bordered table-hover' },
                    React.createElement(
                        'tbody',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Name'
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement('input', {
                                    type: 'text',
                                    className: 'form-control',
                                    value: this.state.name,
                                    required: true,
                                    onChange: this.onNameChange })
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Description'
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement('textarea', {
                                    type: 'text',
                                    className: 'form-control',
                                    required: true,
                                    value: this.state.description,
                                    onChange: this.onDescriptionChange })
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Price ($)'
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement('input', {
                                    type: 'number',
                                    step: '0.01',
                                    className: 'form-control',
                                    value: this.state.price,
                                    required: true,
                                    onChange: this.onPriceChange })
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Category'
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement(
                                    'select',
                                    {
                                        onChange: this.onCategoryChange,
                                        className: 'form-control',
                                        value: this.state.selectedCategoryId },
                                    React.createElement(
                                        'option',
                                        { value: '-1' },
                                        'Select category...'
                                    ),
                                    categoriesOptions
                                )
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement('td', null),
                            React.createElement(
                                'td',
                                null,
                                React.createElement(
                                    'button',
                                    {
                                        className: 'btn btn-primary',
                                        onClick: this.onSave },
                                    'Save'
                                )
                            )
                        )
                    )
                )
            )
        );
    }

});

// component that renders a single product
var ProductRow = React.createClass({
    displayName: 'ProductRow',

    render: function render() {
        var _this2 = this;

        return React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                null,
                this.props.product.name
            ),
            React.createElement(
                'td',
                null,
                this.props.product.description
            ),
            React.createElement(
                'td',
                null,
                '$',
                parseFloat(this.props.product.price).toFixed(2)
            ),
            React.createElement(
                'td',
                null,
                this.props.product.category_name
            ),
            React.createElement(
                'td',
                null,
                React.createElement(
                    'a',
                    { href: '#',
                        onClick: function onClick() {
                            return _this2.props.changeAppMode('readOne', _this2.props.product.id);
                        },
                        className: 'btn btn-info m-r-1em' },
                    ' Read'
                ),
                React.createElement(
                    'a',
                    { href: '#',
                        onClick: function onClick() {
                            return _this2.props.changeAppMode('update', _this2.props.product.id);
                        },
                        className: 'btn btn-primary m-r-1em' },
                    ' Edit'
                ),
                React.createElement(
                    'a',
                    {
                        onClick: function onClick() {
                            return _this2.props.changeAppMode('delete', _this2.props.product.id);
                        },
                        className: 'btn btn-danger' },
                    ' Delete'
                )
            )
        );
    }
});

// component for the whole products table
var ProductsTable = React.createClass({
    displayName: 'ProductsTable',

    render: function render() {

        var rows = this.props.products.map(function (product, i) {
            return React.createElement(ProductRow, {
                key: i,
                product: product,
                changeAppMode: this.props.changeAppMode });
        }.bind(this));

        return !rows.length ? React.createElement(
            'div',
            { className: 'alert alert-danger' },
            'No products found.'
        ) : React.createElement(
            'table',
            { className: 'table table-bordered table-hover' },
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        null,
                        'Name'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Description'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Price'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Category'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Action'
                    )
                )
            ),
            React.createElement(
                'tbody',
                null,
                rows
            )
        );
    }
});

var TopActionsComponent = React.createClass({
    displayName: 'TopActionsComponent',

    render: function render() {
        var _this3 = this;

        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: '#',
                    onClick: function onClick() {
                        return _this3.props.changeAppMode('create');
                    },
                    className: 'btn btn-primary margin-bottom-1em' },
                ' Create product'
            )
        );
    }
});

var ReadProductsComponent = React.createClass({
    displayName: 'ReadProductsComponent',

    getInitialState: function getInitialState() {
        return {
            products: []
        };
    },

    // on mount, fetch all products and stored them as this component's state
    componentDidMount: function componentDidMount() {
        this.serverRequest = $.get("api/read_all_products.php", function (products) {
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

        return React.createElement(
            'div',
            { className: 'overflow-hidden' },
            React.createElement(TopActionsComponent, { changeAppMode: this.props.changeAppMode }),
            React.createElement(ProductsTable, {
                products: filteredProducts,
                changeAppMode: this.props.changeAppMode })
        );
    }
});

var ReadOneProductComponent = React.createClass({
    displayName: 'ReadOneProductComponent',


    getInitialState: function getInitialState() {
        // make sure that no other values are set
        return {
            id: 0,
            name: '',
            description: '',
            price: 0,
            category_name: ''
        };
    },

    // on mount, read one product based on given product ID
    componentDidMount: function componentDidMount() {

        var productId = this.props.productId;

        this.serverRequestProd = $.post("api/read_one_product.php", { prod_id: productId }, function (product) {
            var p = JSON.parse(product)[0];
            this.setState({ category_name: p.category_name });
            this.setState({ id: p.id });
            this.setState({ name: p.name });
            this.setState({ description: p.description });
            this.setState({ price: p.price });
        }.bind(this));

        $('.page-header h1').text('Read Product');
    },

    // on unmount, kill fetching the product data in case the request is still pending
    componentWillUnmount: function componentWillUnmount() {
        this.serverRequestProd.abort();
    },

    // show single product data on a table
    render: function render() {
        var _this4 = this;

        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: '#',
                    onClick: function onClick() {
                        return _this4.props.changeAppMode('read');
                    },
                    className: 'btn btn-primary margin-bottom-1em' },
                'Read Products'
            ),
            React.createElement(
                'form',
                { onSubmit: this.onSave },
                React.createElement(
                    'table',
                    { className: 'table table-bordered table-hover' },
                    React.createElement(
                        'tbody',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Name'
                            ),
                            React.createElement(
                                'td',
                                null,
                                this.state.name
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Description'
                            ),
                            React.createElement(
                                'td',
                                null,
                                this.state.description
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Price ($)'
                            ),
                            React.createElement(
                                'td',
                                null,
                                '$',
                                parseFloat(this.state.price).toFixed(2)
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Category'
                            ),
                            React.createElement(
                                'td',
                                null,
                                this.state.category_name
                            )
                        )
                    )
                )
            )
        );
    }
});

var UpdateProductComponent = React.createClass({
    displayName: 'UpdateProductComponent',


    getInitialState: function getInitialState() {
        return {
            categories: [],
            selectedCategoryId: 0,
            id: 0,
            name: '',
            description: '',
            price: 0,
            successUpdate: null
        };
    },

    componentDidMount: function componentDidMount() {
        this.serverRequestCat = $.get("api/read_all_categories.php", function (categories) {
            this.setState({
                categories: JSON.parse(categories)
            });
        }.bind(this));

        var productId = this.props.productId;
        this.serverRequestProd = $.post("api/read_one_product.php", { prod_id: productId }, function (product) {
            var p = JSON.parse(product)[0];
            this.setState({ selectedCategoryId: p.category_id });
            this.setState({ id: p.id });
            this.setState({ name: p.name });
            this.setState({ description: p.description });
            this.setState({ price: p.price });
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

    onSave: function onSave(e) {
        $.post("api/update_product.php", {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category_id: this.state.selectedCategoryId
        }, function (res) {
            this.setState({ successUpdate: res });
        }.bind(this));
        e.preventDefault();
    },

    render: function render() {
        var _this5 = this;

        var categoriesOptions = this.state.categories.map(function (category) {
            return React.createElement(
                'option',
                { key: category.id, value: category.id },
                category.name
            );
        });

        return React.createElement(
            'div',
            null,
            this.state.successUpdate == "true" ? React.createElement(
                'div',
                { className: 'alert alert-success' },
                'Product was updated.'
            ) : null,
            this.state.successUpdate == "false" ? React.createElement(
                'div',
                { className: 'alert alert-danger' },
                'Unable to update product. Please try again.'
            ) : null,
            React.createElement(
                'a',
                { href: '#',
                    onClick: function onClick() {
                        return _this5.props.changeAppMode('read');
                    },
                    className: 'btn btn-primary margin-bottom-1em' },
                'Read Products'
            ),
            React.createElement(
                'form',
                { onSubmit: this.onSave },
                React.createElement(
                    'table',
                    { className: 'table table-bordered table-hover' },
                    React.createElement(
                        'tbody',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Name'
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement('input', {
                                    type: 'text',
                                    className: 'form-control',
                                    value: this.state.name,
                                    required: true,
                                    onChange: this.onNameChange })
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Description'
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement('textarea', {
                                    type: 'text',
                                    className: 'form-control',
                                    required: true,
                                    value: this.state.description,
                                    onChange: this.onDescriptionChange })
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Price ($)'
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement('input', {
                                    type: 'number',
                                    step: '0.01',
                                    className: 'form-control',
                                    value: this.state.price,
                                    required: true,
                                    onChange: this.onPriceChange })
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                'Category'
                            ),
                            React.createElement(
                                'td',
                                null,
                                React.createElement(
                                    'select',
                                    {
                                        onChange: this.onCategoryChange,
                                        className: 'form-control',
                                        value: this.state.selectedCategoryId },
                                    React.createElement(
                                        'option',
                                        { value: '-1' },
                                        'Select category...'
                                    ),
                                    categoriesOptions
                                )
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement('td', null),
                            React.createElement(
                                'td',
                                null,
                                React.createElement(
                                    'button',
                                    {
                                        className: 'btn btn-primary',
                                        onClick: this.onSave },
                                    'Save Changes'
                                )
                            )
                        )
                    )
                )
            )
        );
    }

});

var DeleteProductComponent = React.createClass({
    displayName: 'DeleteProductComponent',


    componentDidMount: function componentDidMount() {
        $('.page-header h1').text('Delete product');
    },

    onDelete: function onDelete(e) {
        var productId = this.props.productId;

        $.post("api/delete_products.php", { del_ids: [productId] }, function (res) {
            this.props.changeAppMode('read');
        }.bind(this));
    },

    render: function render() {
        var _this6 = this;

        return React.createElement(
            'div',
            { className: 'row' },
            React.createElement('div', { className: 'col-md-3' }),
            React.createElement(
                'div',
                { className: 'col-md-6' },
                React.createElement(
                    'div',
                    { className: 'panel panel-default' },
                    React.createElement(
                        'div',
                        { className: 'panel-body text-align-center' },
                        'Are you sure?'
                    ),
                    React.createElement(
                        'div',
                        { className: 'panel-footer clearfix' },
                        React.createElement(
                            'div',
                            { className: 'text-align-center' },
                            React.createElement(
                                'button',
                                { onClick: this.onDelete,
                                    className: 'btn btn-danger m-r-1em' },
                                'Yes'
                            ),
                            React.createElement(
                                'button',
                                { onClick: function onClick() {
                                        return _this6.props.changeAppMode('read');
                                    },
                                    className: 'btn btn-primary' },
                                'No'
                            )
                        )
                    )
                )
            ),
            React.createElement('div', { className: 'col-md-3' })
        );
    }
});

var MainApp = React.createClass({
    displayName: 'MainApp',


    getInitialState: function getInitialState() {
        return {
            currentMode: 'read',
            productId: null
        };
    },

    changeAppMode: function changeAppMode(newMode, productId) {
        this.setState({ currentMode: newMode });

        if (productId !== undefined) {
            this.setState({ productId: productId });
        }
    },

    render: function render() {

        var modeComponent = React.createElement(ReadProductsComponent, {
            changeAppMode: this.changeAppMode });

        switch (this.state.currentMode) {
            case 'read':
                break;
            case 'readOne':
                modeComponent = React.createElement(ReadOneProductComponent, { productId: this.state.productId, changeAppMode: this.changeAppMode });
                break;
            case 'create':
                modeComponent = React.createElement(CreateProductComponent, { changeAppMode: this.changeAppMode });
                break;
            case 'update':
                modeComponent = React.createElement(UpdateProductComponent, { productId: this.state.productId, changeAppMode: this.changeAppMode });
                break;
            case 'delete':
                modeComponent = React.createElement(DeleteProductComponent, { productId: this.state.productId, changeAppMode: this.changeAppMode });
                break;
            default:
                break;
        }

        return modeComponent;
    }
});

ReactDOM.render(React.createElement(MainApp, null), document.getElementById('content'));

//# sourceMappingURL=main-compiled.js.map