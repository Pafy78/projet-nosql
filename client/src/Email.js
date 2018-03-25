import React, { Component } from 'react';

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowEmail = this.handleShowEmail.bind(this);

    }
    handleShowEmail(e) {
        this.props.email.forEach((email) => {
            if(email._id == e.target.id){
                this.props.onClickSpecificEmail(email);
            }
        });
    }
    render() {
        const rows = [];

        this.props.email.forEach((email) => {
            rows.push(
                <div className="row-emails" id={email._id} onClick={this.handleShowEmail}>
                <p id={email._id} onClick={this.handleShowEmail}>{email.subject}</p>
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