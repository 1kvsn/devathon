import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

import { products } from './Reducer';

const root = combineReducers({
	products,
})

const store = createStore(root);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

