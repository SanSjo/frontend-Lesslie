import React from 'react';
import styled from 'styled-components';
import '../styles/contact.css';

export const Contact = () => {
	return (
		<section className="cardbody-contact">
			<div className="contact-container">
				<h1 className="contact-header">Kontakta oss</h1>
				<p className="contact-item">Östermalmstorg 2, 114 42 Stockholm</p>
				<p className="contact-item">info@lesslie.se</p>
				<p className="contact-item">(+46) 70 380 5800</p>
			</div>
		</section>
	);
};
