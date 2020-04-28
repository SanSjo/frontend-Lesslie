import React from 'react';
import '../styles/guide.css';

export const GuideCard = props => {
	return (
		<div className="guide-cardbody">
			<div className="guide-cardbody-header-container">
				<h4 className="guide-cardbody-header">{props.header}</h4>
			</div>
			<p className="guide-cardbody-text">{props.description}</p>
		</div>
	);
};
