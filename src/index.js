import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import store from "./store";
import './common.css';

ReactDOM.render((

    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>


), document.getElementById('app'));

registerServiceWorker();
