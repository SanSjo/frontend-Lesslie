import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/main-card.css';

export const Cardbody = props => {
	return (
		<div className="cardbody">
			<div className="cardbody-header-container">
				<h4 className="cardbody-header">{props.header}</h4>
			</div>
			<p className="cardbody-text">{props.description}</p>
			<Link to="/guide">
				<button type="submit" className="cardbody-btn">
					{props.button}
				</button>
			</Link>
		</div>
	);
};
