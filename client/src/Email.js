import React, { Component } from 'react';

class Email extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>{this.props.email}</p>
        );
    }
}


export default Email;