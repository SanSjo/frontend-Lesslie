import React from 'react';
import styled from 'styled-components';
import '../styles/main-card.css';

export const Contact = () => {
	return (
		<Section className="cardbody-contact">
			<Container>
				<Header>Kontakta oss</Header>
				<Text>Östermalmstorg 2, 114 42 Stockholm</Text>
				<Text>info@lesslie.se</Text>
				<Text>(+46) 70 380 5800</Text>
			</Container>
		</Section>
	);
};

const Section = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-bottom: 10%;
`;

const Container = styled.div`
	width: 80%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: white;
	border-radius: 5px;
	box-shadow: 2px 2px 4px lightgray;
`;

const Header = styled.h2`
	font-size: 18px;
`;

const Text = styled.p`
	font-size: 14px;
	margin: 0;
`;
