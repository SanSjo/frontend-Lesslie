import React from 'react';
import {
	Card,
	Button,
	CardHeader,
	CardFooter,
	CardBody,
	CardTitle,
	CardText
} from 'reactstrap';
import '../styles/main-card.css';
import { Cardbody } from './Cardbody';

export const MainCard = () => {
	return (
		<section className="card-section">
			<div className="card-container">
				<div className="card-left">
					<div className="cardbody-left">
						<h1 className="header">Välkommen till Leslie Cloud</h1>
						<p className="card-text">
							Kom igång snabbt och enkelt med två enkla steg!
						</p>
					</div>
				</div>

				<section className="section-right">
					<div className="card-right">
						<div className="cardbody-mobile-container">
							<div className="cardbody-mobile">
								<h1 className="header">Välkommen till Leslie Cloud</h1>
								<p className="card-text">
									Kom igång snabbt och enkelt med vår guide nedan!
								</p>
							</div>
						</div>

						<div className="cardbody-container">
							<Cardbody
								header="1"
								description="Signera vårt kundavtal här"
								button="Signera kundavtal"
							/>
							<Cardbody
								header="2"
								description="Integrera Lesslie Cloud med din Fortnox miljö genom att följa
								vår Integrationsguide till Fortnox"
								button="Integrationsguide"
							/>
						</div>

						<div className="cardbody-contact-">
							<h2>Kontakt:</h2>
							<p>Östermalmstorg 2, 114 42 Stockholm</p>
							<p>info@lesslie.se</p>
							<p>(+46) 70 380 5800</p>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};
