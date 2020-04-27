import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { MainCard } from './components/MainCard';
import { Sidenav } from './components/Sidenav';
import { Wrapper } from './components/Wrapper';
import { Footer } from './components/Footer';

function App() {
	return (
		<div id="outer-container">
			<Sidenav />
			<MainCard />
		</div>
	);
}

export default App;
