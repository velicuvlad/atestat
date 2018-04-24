import React from 'react'
import $ from 'jquery'
import ReadOneProductComponent from './ReadOneProductComponent'
import ProductsTable from './ProductsTable'
import ProductsTable2 from './ProductsTable2'

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
        this.serverRequest = $.get("api/read_all_products_main_page.php",
            function (products) {
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
        localStorage.setItem("yscroll", window.pageYOffset);

    },

    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    render: function () {
        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');

        let left = [];
        let right = [];

        for (let i = 0; i < filteredProducts.length; i++)
            if (i % 2 === 0) left.push(filteredProducts[i])
            else right.push(filteredProducts[i])

        return (
            <div className="readContainer">
                <ProductsTable
                    products={left}
                    changeAppMode={this.changeAppMode}/>
                <ProductsTable2 products={right}
                                changeAppMode={this.changeAppMode}/>
            </div>
        );
    }
});

export default ReadProductsComponent