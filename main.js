import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import reducers from './reducers';
import './style/main.scss';

import { getAllTodos } from './actions/todos.js';

import api from 'services/apiService.js';

const store = createStore(reducers, (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(thunkMiddleware)));

render();
init();

if (module.hot) {
  module.hot.accept('./components/App/App.js', () => {
    render();
  });
}

function render () {
  const App = require('./components/App/App.js').default;
  ReactDOM.render(
		<Provider store={store}>
			<AppContainer>
				<App />
			</AppContainer>
		</Provider>,
		document.getElementById('root')
	);
}

function init () {
  store.dispatch(getAllTodos());
}
