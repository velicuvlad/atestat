import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

var DeleteProductComponent = React.createClass({

    componentDidMount: function () {
        $('.page-header h1').text('Delete product');
    },

    onDelete: function (e) {
        var productId = localStorage.getItem("productId");

        $.post("api/delete_product.php",
            {del_ids: [productId]},
        );
    },

    render: function () {

        return (
            <div>
                <p>Esti sigur ca vrei sa stergi acest articol? Nu il vei putea recupera.</p>
                <Link to="/content.php"
                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}
                >
                    <button onClick={this.onDelete}
                            className='btn btn-danger m-r-1em'>Da
                    </button>
                </Link>
                <Link to="/content.php"
                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}>
                    <button
                        className='btn btn-primary'>Nu
                    </button>
                </Link>
            </div>
        );
    }
});

export default DeleteProductComponent