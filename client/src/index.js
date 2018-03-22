import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var callApi = async () => {
    const response = await fetch('/api/all');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    ReactDOM.render(<App emails={body.express}/>, document.getElementById('root'));
};

callApi();


registerServiceWorker();