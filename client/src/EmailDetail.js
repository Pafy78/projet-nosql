import React, { Component } from 'react';

class EmailDetail extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowEmail = this.handleShowEmail.bind(this);
    }

    async handleShowEmail(e) {
        const response = await fetch('/api/remove/' + this.props.email._id);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        window.location.reload();
    }

    render() {
        return (
            <div className="email">
            <div className="row-between">
            <h2 className="subject">{this.props.email.subject}</h2>
            <input type="submit" value="Delete" onClick={this.handleShowEmail} />
            </div>
            <div className="row-between">
            <p className="from">Send by : {this.props.email.sender}</p>
            <p className="date">{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date(this.props.email.date))}</p>
            </div>
            <hr/>
            <p className="text">{this.props.email.text}</p>
                </div>
            );
}
}


export default EmailDetail;