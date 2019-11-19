import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import classes from './App.scss';
import Home from '../pages/home';
import { Header } from "../containers";

const App = () => {
	return (
		<Router>
			<Header></Header>
			<h2>Front teste</h2>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<ul className="navbar-nav mr-auto">
					<li><Link to={'/'} className="nav-link"> Home </Link></li>
					<li><Link to={'/contact'} className="nav-link">Contact</Link></li>
					<li><Link to={'/about'} className="nav-link">About</Link></li>
				</ul>
			</nav>
			<hr />
			<Switch>
				<Route exact path='/' component={Home} />
				{/* <Route path='/contact' component={Contact} />
				<Route path='/about' component={About} /> */}
			</Switch>
		</Router>)
};

export default App;