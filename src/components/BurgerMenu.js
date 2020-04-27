import React from 'react';
import styled from 'styled-components';
import { ReactBurgerMenu } from 'react-burger-menu';

export const BurgerMenu = () => {
	return (
		<BurgerContainer className="logo">
			<Burger></Burger>
			<Burger></Burger>
			<Burger></Burger>
		</BurgerContainer>
	);
};

export default BurgerMenu;

const Burger = styled.div`
	width: 25px;
	background-color: black;
	height: 3px;
	display: flex;
	margin: 3px;

	&:hover {
		background-color: #36999f;
	}
`;

const BurgerContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
