import React from 'react'
import $ from 'jquery'

var ReadOneProductComponent = React.createClass({

    getInitialState: function () {
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
    componentDidMount: function () {

        var productId = localStorage.getItem("productId");

        this.serverRequestProd = $.post("api/read_one_product.php",
            {prod_id: productId},
            function (product) {
                var p = JSON.parse(product)[0];
                this.setState({category_name: p.category_name});
                this.setState({id: p.id});
                this.setState({name: p.name});
                this.setState({description: p.description});
                this.setState({price: p.price});
                this.setState({link: p.link});
                this.setState({photo: p.photo});
                this.setState({yt_link: p.yt_link});
                this.setState({publisher_name: p.publisher_name});
            }.bind(this));
    },

    componentWillReceiveProps: function (nextProps) {
        var productId = localStorage.getItem("productId");
        this.serverRequestProd = $.post("api/read_one_product.php",
            {prod_id: productId},
            function (product) {
                var p = JSON.parse(product)[0];
                this.setState({category_name: p.category_name});
                this.setState({id: p.id});
                this.setState({name: p.name});
                this.setState({description: p.description});
                this.setState({price: p.price});
                this.setState({link: p.link});
                this.setState({photo: p.photo});
                this.setState({yt_link: p.yt_link});
                this.setState({publisher_name: p.publisher_name});
            }.bind(this));
    },

    // on unmount, kill fetching the product data in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequestProd.abort();
    },

    // show single product data on a table
    render: function () {
        return (
            <div>
                <div className="Title">
                    {this.state.name}
                </div>
                <div className="description-container">
                    Creat de: vladv {this.state.publisher_name}
                    <div className="trailer-type-demolink">
                        <div>
                            Category: {this.state.category_name}
                        </div>
                    </div>
                    <div className="right_text1">
                        Details: {this.state.description}
                    </div>
                    <div className="trailer">
                    </div>
                </div>
            </div>
        );
    }
});

export default ReadOneProductComponent