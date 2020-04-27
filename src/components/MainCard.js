import React from 'react';
import {
	Card,
	Button,
	CardHeader,
	CardFooter,
	CardBody,
	CardTitle,
	CardText,
	Navbar
} from 'reactstrap';
import '../styles/main-card.css';
import { Cardbody } from './Cardbody';
import { Contact } from './Contact';
import { NavBar } from './NavBar';

export const MainCard = () => {
	return (
		<div className="wrapper" id="page-wrap">
			<NavBar />
			<section className="card-section">
				<div className="card-container">
					<div className="card-left">
						<div className="cardbody-left">
							<h1 className="header">Välkommen till Lesslie Cloud</h1>
							<p className="card-text">
								Kom igång direkt med <span>två</span> enkla steg!
							</p>
						</div>
					</div>

					<section className="section-right">
						<div className="card-right">
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
							<Contact />
						</div>
					</section>
				</div>
			</section>
		</div>
	);
};
