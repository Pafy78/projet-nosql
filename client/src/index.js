import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmailsList from './EmailsList';
import Email from './Email';
import registerServiceWorker from './registerServiceWorker';


class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null
        };

        this.handleShowEmail = this.handleShowEmail.bind(this);


    }

    handleShowEmail(em) {
        this.setState({
            email: em
        });
        callApiDetails(em);
    }
    render() {
        return (
            <div className="content">
            <EmailsList 
            emails={this.props.emails} 
            email={this.state.email}
            onClickEmail={this.handleShowEmail}
            />
            <div id="EmailDetails" className="EmailDetails">
            
            </div>
            </div>
        );
    }
}


var callApi = async () => {
    const response = await fetch('/api/emails');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    ReactDOM.render(<Base emails={body.express}/>, document.getElementById('root'));
                    };

                    var callApiDetails = async (email) => {
        const response = await fetch('/api/details/' + email);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        ReactDOM.render(<Email email={body.express} />, document.getElementById('EmailDetails'));
                        };



                        callApi();
        registerServiceWorker();