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
                <p>Are you sure about deleting this post?</p>
                <Link to="/content.php"
                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}
                >
                    <button onClick={this.onDelete}
                            className='btn btn-danger m-r-1em'>Yes
                    </button>
                </Link>
                <Link to="/content.php"
                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}>
                    <button
                        className='btn btn-primary'>No
                    </button>
                </Link>
            </div>
        );
    }
});

export default DeleteProductComponent