import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from "../containers";
import { HomePage, LoginPage } from "../pages";

const App = () => {
	return (
		<Router>
			<Header></Header>
			<h2>Front teste</h2>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<ul className="navbar-nav mr-auto">
					<li><Link to={'/'} className="nav-link"> Home </Link></li>
					<li><Link to={'/login'} className="nav-link">Login</Link></li>
					<li><Link to={'/about'} className="nav-link">About</Link></li>
				</ul>
			</nav>
			<hr />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/login' component={LoginPage} />
				{/* <Route path='/contact' component={Contact} />
				<Route path='/about' component={About} /> */}
			</Switch>
		</Router>)
};

export default App;