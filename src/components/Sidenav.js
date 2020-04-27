import React from 'react';
import { PushMenu, usePushMenu } from 'react-push-menu';
import { push as Menu } from 'react-burger-menu';
import { Burger } from '../img/burger.png';
import { NavBar } from './NavBar';
import { BurgerMenu } from './BurgerMenu';
import { SidebarContent } from './SidebarContent';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import SideNav, {
	Toggle,
	Nav,
	NavItem,
	NavIcon,
	NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import '../styles/sidenav.css';

export const Sidenav = () => {
	return (
		<>
			<Menu
				isOpen={false}
				className="sidebar"
				noOverlay
				disableOverlayClick
				pageWrapId={'page-wrap'}
				outerContainerId={'outer-container'}
				customBurgerIcon={<img src={Burger} />}
			>
				<h1 id="home" className="menu-item-header" href="/">
					Mitt Lesslie Cloud
				</h1>
				<div className="menu-item-container">
					<p id="about" className="menu-item" href="/about">
						Kom igång
					</p>
					<p id="contact" className="menu-item" href="/contact">
						Guider
					</p>
					<p className="menu-item--small" href="">
						Settings
					</p>
				</div>
			</Menu>{' '}
		</>
	);
};

// import React, { useState } from 'react';
// import SideNav, {
// 	Toggle,
// 	Nav,
// 	NavItem,
// 	NavIcon,
// 	NavText
// } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// import '../styles/main-card.css';

// export const Sidenav = () => {
// 	return (
// 		<>
// 			<SideNav className="sidebar">
// 				<SideNav.Toggle
// 					expanded="true"
// 					className="sidebar-toggle"
// 					animation="push"
// 				/>
// 				<SideNav.Nav defaultSelected="home">
// 					<NavItem eventKey="home">
// 						<NavIcon>
// 							<i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
// 						</NavIcon>
// 						<NavText>Home</NavText>
// 					</NavItem>
// 					<NavItem eventKey="charts">
// 						<NavIcon>
// 							<i
// 								className="fa fa-fw fa-line-chart"
// 								style={{ fontSize: '1.75em' }}
// 							/>
// 						</NavIcon>
// 						<NavText>Charts</NavText>
// 						<NavItem eventKey="charts/linechart">
// 							<NavText>Line Chart</NavText>
// 						</NavItem>
// 						<NavItem eventKey="charts/barchart">
// 							<NavText>Bar Chart</NavText>
// 						</NavItem>
// 					</NavItem>
// 				</SideNav.Nav>
// 			</SideNav>
// 		</>
// 	);
// };
