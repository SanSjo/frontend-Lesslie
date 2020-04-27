import React, { useState } from 'react';

import BurgerMenu from './BurgerMenu';
import styled from 'styled-components';

export const NavBar = () => {
	return (
		<Nav className="navbar">
			<BurgerMenu />
		</Nav>
	);
};

const Nav = styled.div`
	width: 100%;
	background-color: white;
	margin-top: 0;
	height: 9%;
	display: flex;
	align-items: center;
`;

// <Navbar
// 			id="outer-container"
// 			id="page-wrap"
// 			color="white"
// 			light
// 			expand="md"
// 		>
// 			<NavbarBrand>
// 				<img src={BurgerMenu} />
// 			</NavbarBrand>
// 			<NavbarToggler onClick={toggle} />
// 			<Collapse isOpen={isOpen} navbar>
// 				<Nav className="mr-auto" navbar></Nav>
// 				<NavbarText>Simple Text</NavbarText>
// 			</Collapse>
// 		</Navbar>
// 	</div>
