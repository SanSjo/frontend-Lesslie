import React from 'react';
import { Button } from 'reactstrap';
import '../styles/main-card.css';

export const Cardbody = props => {
	return (
		<div className="cardbody">
			<div className="cardbody-header-container">
				<h4 className="cardbody-header">{props.header}</h4>
			</div>
			<p className="cardbody-text">{props.description}</p>
			<Button className="cardbody-btn">{props.button}</Button>
		</div>
	);
};
