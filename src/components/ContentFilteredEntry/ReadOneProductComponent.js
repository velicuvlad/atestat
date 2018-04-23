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


        $('.page-header h1').text('Read Product');
    },

    componentWillReceiveProps:function (nextProps) {
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
                    Creat de: {this.state.publisher_name}
                    <div className="right_text1">
                        {this.state.description}
                    </div>
                    <div className="trailer-type-demolink">
                        <div>
                            {this.state.category_name}
                        </div>
                        <div>
                            <a href={this.state.link}>Download Link</a>
                        </div>
                    </div>
                    <div className="trailer">
                        <iframe width="100%" height="100%" src={this.state.yt_link} frameBorder="0"
                                allowFullScreen style={{background: "#141319"}} allowTransparency="true"></iframe>
                    </div>
                </div>
            </div>
        );
    }
});

export default ReadOneProductComponent