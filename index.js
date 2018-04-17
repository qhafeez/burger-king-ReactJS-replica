import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import { createStore, compose, combineReducers } from "redux";

import menuReducer from "./store/reducers/menuReducer.js";
import mealReducer from "./store/reducers/mealReducer.js";
import headerUIReducer from "./store/reducers/headerUIReducer.js";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	menu: menuReducer,
	meal:mealReducer,
	header:headerUIReducer
});


const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(<Provider store={store}>

					<BrowserRouter  basename="projects/bkreplica" >
						<App />
					</BrowserRouter>
				</Provider>, document.getElementById('root'));
registerServiceWorker();
