import React from 'react';

import BurgerMenu from './BurgerMenu';
import flag from '../img/flag.png';
import '../styles/navbar.css';

export const NavBar = () => {
	return (
		<div className="navbar">
			<BurgerMenu />
			<div className="nav-item-container">
				<img className="nav-flag-img" src={flag} alt="svenska flaggan" />
				<p className="nav-item">Logga in</p>
			</div>
		</div>
	);
};
