import React from 'react'
import {Link} from 'react-router'

var ProductRow = React.createClass({
    render: function () {
        return (
            <div className="table" style={{textDecoration: 'none'}}>
                <span className="link">
                <Link to="/indexlogged.php" onClick={() => this.props.changeAppMode('readOne', this.props.product.id) }>
                    <img className="left_img" src={this.props.product.photo}
                         alt="No photo available"/>
                    <div className="productName">{this.props.product.name}</div>
                    </Link></span>
            </div>

        );
    }
});

export default ProductRow