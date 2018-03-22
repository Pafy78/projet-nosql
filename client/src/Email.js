import React, { Component } from 'react';

class Email extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {
        const rows = [];

        this.props.email.forEach((email) => {
            rows.push(
                <div className="row-emails">
                <p>{email.subject}</p>
                </div>
            );
        });
        return (
            <div className="emails-list">
            {rows}
            </div>
        );
    }
}


export default Email;