import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store  from "./Redux/Store";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import MainPage from "./Modules/MainPage/MainPage";




ReactDOM.render(
	<Provider store={store} >
		<Router>
			<Switch>
				<Route path = '/' component ={MainPage} />
				<Redirect to='/' />
			</Switch>
		</Router>

	</Provider>,
	document.getElementById('root')
);
