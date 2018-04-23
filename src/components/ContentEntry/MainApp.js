import React from 'react'
import ReadOneProductComponent from './ReadOneProductComponent'
import CreateProductComponent from './CreateProductComponent'
import UpdateProductComponent from './UpdateProductComponent'
import DeleteProductComponent from './DeleteProductComponent'

var MainApp = React.createClass({
    getInitialState: function () {
        return {
            currentMode: 'readOne',
            productId: null
        }
    },
    render: function () {
        var modeComponent =
            <ReadOneProductComponent
                changeAppMode={this.changeAppMode} productId={this.state.productId}/>;

        switch (this.props.currentMode) {
            case 'readOne':
                break;
            case 'create':
                modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent =
                    <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent =
                    <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }

        return modeComponent;
    }
});

export default MainApp