import React from 'react';
import styled from 'styled-components';
import { ReactBurgerMenu } from 'react-burger-menu';

export const BurgerMenu = () => {
	return (
		<BurgerContainer className="logo">
			<Span>
				<Burger1></Burger1>
				<Burger2></Burger2>
				<Burger3></Burger3>
			</Span>
			<Button></Button>
		</BurgerContainer>
	);
};

export default BurgerMenu;

const Span = styled.span`
	&:hover {
		background-color: green;
	}
`;
const Burger1 = styled.span`
	position: absolute;
	height: 20%;
	left: 0px;
	right: 0px;
	top: 0%;
	opacity: 1;
	background-color: #373a47;

	&:hover {
		opacity: 0.6;
	}
`;

const Burger2 = styled.span`
	position: absolute;
	height: 20%;
	left: 0px;
	right: 0px;
	top: 50%;
	opacity: 1;
	background-color: #373a47;

	&:hover {
		opacity: 0.6;
	}
`;

const Burger3 = styled.span`
	position: absolute;
	height: 20%;
	left: 0px;
	right: 0px;
	top: 100%;
	opacity: 1;
	background-color: #373a47;

	&:hover {
		opacity: 0.6;
	}
`;

const Button = styled.button`
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	border: none;
	font-size: 0px;
	background-color: transparent;
	cursor: pointer;
	opacity: 1;

	&:hover {
		opacity: 0.6;
	}
`;

const BurgerContainer = styled.div`
	position: relative;
	width: 36px;
	height: 20px;
	left: 36px;
	top: 5px;
	z-index: 1000;
`;
