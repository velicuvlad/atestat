import React from 'react'
import $ from 'jquery'
import ProductsTable from './ProductsTable'
import ReadOneProductComponent from './ReadOneProductComponent'

var ReadProductsComponent = React.createClass({
    getInitialState: function () {
        return {
            products: [],
            currentMode: 'read',
            productId: null,
            currentId: null
        };
    },

    // on mount, fetch all products and stored them as this component's state
    componentDidMount: function () {
        this.serverRequest = $.get("api/read_all_products_main_page.php", function (products) {
            this.setState({
                products: JSON.parse(products)
            });
        }.bind(this));
    },

    changeAppMode: function (newMode, productId) {
        this.setState({
            currentMode: newMode,
            currentId: productId
        });

        if (productId !== undefined) {
            this.setState({productId: productId});

        }
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("productId", productId);
        } else {
            alert("Please use a browser that supports LocalStorage.");
        }
    },

    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    render: function () {
        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');

        return (
            <div className="readContainer">
                <ProductsTable
                    products={filteredProducts}
                    changeAppMode={this.changeAppMode}/>
                <div className="product-background">
                    <ReadOneProductComponent products={filteredProducts} productId={this.state.currentId}/>
                </div>
            </div>
        );
    }
});

export default ReadProductsComponent