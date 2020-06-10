import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer} from './reducers/index'

//redux store setup/boilerplate
//black magic that breaks the laws of nature basically


const store = createStore(reducer)
const rootElement = document.getElementById('root');

ReactDOM.render(
<Provider store = {store}>   
    <App />
</Provider> , rootElement);