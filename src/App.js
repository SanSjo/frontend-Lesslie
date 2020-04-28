import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { MainCard } from './components/MainCard';
import { Sidenav } from './components/Sidenav';
import { Wrapper } from './components/Wrapper';
import { Footer } from './components/Footer';
import { Guide } from './components/Guide';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Sidenav pageWrapId={'page-wrap'} outerContainerId={'App'} />
					<MainCard />
					<Footer />
				</Route>
				<Route path="/guide" exact>
					<Sidenav pageWrapId={'page-wrap'} outerContainerId={'App'} />
					<Guide />
					<Footer />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
