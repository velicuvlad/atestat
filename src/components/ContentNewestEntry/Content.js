import React from 'react'
import TopBar from './TopBar'

class Content extends React.Component {
    render() {
        return (
            <div className="DOM">
                <TopBar/>
                {this.props.children}
            </div>
        );
    }
}

export default Content