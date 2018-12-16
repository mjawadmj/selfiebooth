import React from 'react';
import logo from '../../assets/img/logo.png';
import background1 from '../../assets/img/background1.jpg'
import altLogo from '../../assets/img/logo-alt.png';
export const Header =()=>{
    return(
	<header id="home">
    
		<div className="bg-img" style={{backgroundImage: `url(${background1})`}}>
			<div className="overlay"></div>
		</div>
		<nav id="nav" className="navbar nav-transparent">
			<div className="container">

				<div className="navbar-header">
					<div className="navbar-brand">
						<a href="index.html">
							<img className="logo" src={logo} alt="logo"/>
							<img className="logo-alt" src={altLogo} alt="logo"/>
						</a>
					</div>
					<div className="nav-collapse">
						<span></span>
					</div>
				</div>

				<ul className="main-nav nav navbar-nav navbar-right">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#service">Services</a></li>
					<li><a href="#pricing">Prices</a></li>
					<li><a href="#team">Team</a></li>
					
					<li><a href="#contact">Contact</a></li>
					<li><a data-toggle="modal" data-target="#myModal">Login</a></li>
				</ul>

			</div>
		</nav>
		<div className="home-wrapper">
			<div className="container">
				<div className="row">

					<div className="col-md-10 col-md-offset-1">
						<div className="home-content">
							<h1 className="white-text">Selfie Booth</h1>
							<h3 className="white-text">"By Team Xterminate"</h3>
							<p className="white-text">Get your party started with a unique kind of experience of Selfie Booth!
							</p>
							<p className="white-text">Capture your precious moments and make it everlasting. Our photo booth will be the perfect addition to any of your special event
							</p>
							<button className="white-btn">Get Started!</button>
							<button className="main-btn">Learn more</button>
						</div>
					</div>

				</div>
			</div>
		</div>

	</header>

    )
}