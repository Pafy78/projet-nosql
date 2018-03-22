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
            email: ''
        };

        this.handleShowEmail = this.handleShowEmail.bind(this);


    }

    handleShowEmail(em) {
        this.setState({
            email: em
        });
    }
    render() {
        return (
            <div className="content">
            <EmailsList 
            emails={this.props.emails} 
            onClickEmail={this.handleShowEmail}
            />
            <div className="EmailDetails">
            <Email 
            email={this.state.email}
            />
            </div>
            </div>
        );
    }
}


var callApi = async () => {
    const response = await fetch('/api/all');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    ReactDOM.render(<Base emails={body.express}/>, document.getElementById('root'));
                    };



                    callApi();
    registerServiceWorker();