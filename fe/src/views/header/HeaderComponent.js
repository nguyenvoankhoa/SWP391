import React, { Component } from 'react';

export default class HeaderComponent extends Component {

    render() {
        let { content } = this.props
        return (
            <div>
                {content}
            </div>
        )
    }
}