import React from 'react';
import { PushMenu, usePushMenu } from 'react-push-menu';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import '../styles/sidenav.css';
import logo from '../img/logo.png';

export const Sidenav = props => {
	return (
		<>
			<Menu {...props} className="sidebar" burgerButtonClassName={'my-class'}>
				<Link to="/">
					<h1 id="home" className="menu-item-header" href="/">
						<img src={logo} alt="logo" />
						Mitt Lesslie Cloud
					</h1>
				</Link>
				<div className="menu-item-container">
					<Link to="/">
						<button type="submit" id="about" className="menu-item">
							Kom igång
						</button>
					</Link>
					<Link to="guide">
						<button
							type="submit"
							id="contact"
							className="menu-item"
							href="/contact"
						>
							Guider
						</button>
					</Link>
				</div>
			</Menu>{' '}
		</>
	);
};
