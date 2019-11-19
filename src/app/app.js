import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header, Navigator } from "../containers";
import { HomePage, LoginPage } from "../pages";
import './app.scss';
import { Container, makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},

	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<nav className={classes.drawer}>
				<Navigator></Navigator>

				{/* <h2>Front teste</h2>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Navigator></Navigator>
			<ul className="navbar-nav mr-auto">
			<li><Link to={'/'} className="nav-link"> Home </Link></li>
			<li><Link to={'/login'} className="nav-link">Login</Link></li>
			<li><Link to={'/about'} className="nav-link">About</Link></li>
			</ul>
				</nav>
			<hr /> */}
			</nav>
			<main className={classes.content}>
				<Header></Header>
				<Container>
					<Router>

						<Switch>
							<Route exact path='/' component={HomePage} />
							<Route path='/login' component={LoginPage} />
						</Switch>
					</Router>
				</Container>
			</main>
		</div>)
};

export default App;