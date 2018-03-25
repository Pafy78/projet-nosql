import React, { Component } from 'react';

class EmailDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="email">
            <h2 className="subject">{this.props.email.subject}</h2>
            <div className="from-date">
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