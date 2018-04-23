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
                        changeAppMode={this.props.changeAppMode}
                    />
                );
            }.bind(this));

        return (
            !rows.length
                ? <div className='alert alert-danger'>No articles. Start posting and they will appear here.</div>
                :
                <div>
                    {rows}
                </div>
        );
    }
});

export default ProductsTable