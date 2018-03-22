import React, { Component } from 'react';

class EmailsList extends Component {
    constructor(props) {
        super(props);
        this.handleShowEmail = this.handleShowEmail.bind(this);

    }
    handleShowEmail(e) {
        this.props.onClickEmail(e.target.id);
    }

    render() {
        const rows = [];

        this.props.emails.forEach((email) => {
            if(this.props.email == email){
                rows.push(
                    <div className="row-emails active" id={email} onClick={this.handleShowEmail} >
                    <p id={email} onClick={this.handleShowEmail}>{email}</p>
                    </div>
                );
            }
            else{
                rows.push(
                    <div className="row-emails" id={email} onClick={this.handleShowEmail} >
                    <p id={email} onClick={this.handleShowEmail}>{email}</p>
                    </div>
                );
            }
        });

        return (
            <div className="emails-list">
            {rows}
            </div>
        );
    }
}

export default EmailsList;