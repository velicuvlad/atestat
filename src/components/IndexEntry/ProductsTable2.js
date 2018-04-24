import React from 'react'
import ProductRow2 from './ProductRow2'

var ProductsTable2 = React.createClass({
    render: function () {

        var rows = this.props.products
            .map(function (product, i) {
                return (
                    <ProductRow2
                        key={i}
                        product={product}
                        changeAppMode={this.props.changeAppMode}/>
                );
            }.bind(this));

        return (
            !rows.length
                ? <div className='alert alert-danger'>Cannot find any articles</div>
                :
                <div className="product-background">
                    {rows}
                </div>
        );
    }
});

export default ProductsTable2