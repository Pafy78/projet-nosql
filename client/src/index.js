import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmailsList from './EmailsList';
import Email from './Email';
import EmailDetail from './EmailDetail';
import registerServiceWorker from './registerServiceWorker';


class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null
        };

        this.handleShowEmail = this.handleShowEmail.bind(this);

    }



    async handleShowEmail(em) {
        this.setState({
            email: em
        });
        const response = await fetch('/api/details/' + em);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        ReactDOM.render(<Email onClickSpecificEmail={this.handleShowSpecificEmail} email={body.express} />, document.getElementById('EmailDetails'));
                        }

                        handleShowSpecificEmail(em) {
            ReactDOM.render(<EmailDetail onClickDeleteEmail={this.handleDeleteEmail} email={em} />, document.getElementById('EmailSpecific'));
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
                    <div id="EmailSpecific" className="EmailSpecific">

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




                            callApi();
            registerServiceWorker();