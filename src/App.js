import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import RegisterFirst from './components/RegisterFirst';
import RegisterSecond from './components/RegisterSecond';
import UserList from './components/UserList';
import Dashboard from './components/Dashboard';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class App extends React.Component {

  render() {
    return (
			<Router history={history} basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/register/1" component={RegisterFirst} />
					<Route exact path="/register/2" component={RegisterSecond} />
					<Route exact path="/userlist" component={UserList} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Redirect exact from="/" to="/register/1" />
				</Switch>
			</Router>
		);
  }
}

export default App;
