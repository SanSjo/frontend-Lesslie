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

const Span = styled.span``;
const Burger1 = styled.span`
	position: absolute;
	height: 20%;
	left: 0px;
	right: 0px;
	top: 0%;
	opacity: 1;
	background-color: #373a47;
	width: 70%;

	&:hover {
		opacity: 0.6;
	}
`;

const Burger2 = styled.span`
	position: absolute;
	height: 20%;
	left: 0px;
	right: 0px;
	top: 40%;
	opacity: 1;
	background-color: #373a47;
	width: 90%;

	&:hover {
		opacity: 0.6;
	}
`;

const Burger3 = styled.span`
	position: absolute;
	height: 20%;
	left: 0px;
	right: 0px;
	top: 80%;
	opacity: 1;
	background-color: #373a47;
	width: 70%;

	&:hover {
		opacity: 0.6;
	}
`;

const Button = styled.button`
	left: 0px;
	top: 0px;
	width: 100%;
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
	height: 15px;
	left: 20px;
	bottom: 20px;
	z-index: 1000;
	opacity: 1;
	color: green;

	&:hover {
		color: green;
	}
`;
