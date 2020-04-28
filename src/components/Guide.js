import React from 'react';
import { GuideCard } from './GuideCard';
import guide from '../img/Guide1-2.PNG';
import guide2 from '../img/guide3.PNG';
import guide3 from '../img/guide4-5.PNG';
import guide6 from '../img/guide6.PNG';
import '../styles/guide.css';
import { NavBar } from './NavBar';

export const Guide = () => {
	return (
		<>
			<div id="page-wrap">
				<NavBar />
				<section className="guide-section">
					<div className="guide-header">
						<h1 className="header">
							Integrera Lesslie Cloud med din Fortnox miljö
						</h1>
						<p className="card-text">Logga in hos Fortnox för att börja</p>
					</div>
					<div className="guide-card">
						<div className="guide-card-container-one">
							<GuideCard
								header="1"
								description="Öppna användarmenyn högst upp till höger på din skärm."
							/>
							<GuideCard
								header="2"
								description="Tryck på 'Administrera användare'."
							/>
						</div>
						<div className="img-container">
							<img className="guide1-img" src={guide} alt="guide1" />
						</div>
					</div>

					<div className="guide-card">
						<GuideCard header="3" description="Lägg till integration" />
						<div className="img-container">
							<img className="guide-img-3" src={guide2} alt="guide-2" />
						</div>
					</div>
					<div className="guide-card">
						<div className="guide-card-container-one">
							<GuideCard
								header="4"
								description="Öppna användarmenyn högst upp till höger på din skärm."
							/>
							<GuideCard
								header="5"
								description="Öppna användarmenyn högst upp till höger på din skärm."
							/>
						</div>
						<div className="img-container">
							<img className="guide-3" src={guide3} alt="guide4-5" />
						</div>
					</div>
					<div className="guide-card">
						<GuideCard header="6" description="Lägg till integration" />
						<div className="img-container">
							<img src={guide6} alt="guide 6" />
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Guide;
