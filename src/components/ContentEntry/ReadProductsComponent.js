import React from 'react'
import $ from 'jquery'
import TopActionsComponent from './TopActionsComponent'
import ProductsTable from './ProductsTable'
import MainApp from './MainApp'

var ReadProductsComponent = React.createClass({
    getInitialState: function () {
        return {
            products: [],
            currentMode: 'readOne',
            productId: null
        };
    },

    // on mount, fetch all products and stored them as this component's state

    componentDidMount: function () {
        this.serverRequest = $.get("api/read_all_products.php?", function (products) {
            this.setState({
                products: JSON.parse(products)
            });
        }.bind(this));
    },

    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    changeAppMode: function (newMode, productId) {
        this.setState({currentMode: newMode});

        if (productId !== undefined) {
            this.setState({productId: productId});
        }
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("productId", productId);
            localStorage.setItem("currentMode", newMode)
        } else {
            alert("Please use a browser that supports LocalStorage.");
        }

    },

    render: function () {

        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');

        return (
            <div>
                <div className="left">
                    <div className="contentTitle">Administrare Articole</div>
                    <TopActionsComponent changeAppMode={this.changeAppMode}/>

                    <ProductsTable
                        products={filteredProducts}
                        changeAppMode={this.changeAppMode}/>
                </div>
                <div className="right">
                    <MainApp currentMode={this.state.currentMode}/>
                </div>
            </div>
        );
    }
});

export default ReadProductsComponent