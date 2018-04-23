import React from 'react'
import ProductRow from './ProductRow'

var ProductsTable = React.createClass({
    render: function () {

        var rows = this.props.products
            .map(function (product, i) {
                return (
                    <ProductRow
                        key={i}
                        product={product}
                        changeAppMode={this.props.changeAppMode}/>
                );
            }.bind(this));

        return (
            !rows.length
                ? <div className='alert alert-danger'>Cannot find any articles according to filters.</div>
                :
                <div className="product-background">
                    {rows}
                </div>
        );
    }
});

export default ProductsTable