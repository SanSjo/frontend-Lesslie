import React from 'react';
import styled from 'styled-components';
import '../styles/main-card.css';

export const Contact = () => {
	return (
		<Section className="cardbody-contact">
			<Container>
				<Header>Kontakt:</Header>
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
	align-items: center;
	width: 100%;
`;

const Container = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: white;
`;

const Header = styled.h2`
	font-size: 18px;
`;

const Text = styled.p`
	font-size: 12px;
	margin: 0;
`;
