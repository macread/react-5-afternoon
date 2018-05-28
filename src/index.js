import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Hashrouter } from 'react-reouter-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store = { store }>
        <Hashrouter>
            <App />
        </Hashrouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

