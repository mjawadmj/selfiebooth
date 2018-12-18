import React from 'react';
import logo from '../../assets/img/logo.png';
import background1 from '../../assets/img/background1.jpg'
import altLogo from '../../assets/img/logo-alt.png';
import { HashLink as Link } from 'react-router-hash-link';
export const HeaderHome =({user,onSignOut})=>{
	
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
					<li><Link to="#home">Home</Link></li>
					{user &&<li><Link to="/dashboard">dashboard</Link></li>}
					<li><a href="#service">Services</a></li>
					<li><a href="#features">About</a></li>
					<li><a href="#pricing">Prices</a></li>
					<li><a href="#team">Team</a></li>
					
					<li><a href="#contact">Contact</a></li>
					{!user && <li><a data-toggle="modal" data-target="#myModal">Login</a></li>}
					{user && <li><a 
					onClick={onSignOut}
					>Sign Out</a></li>}
					
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

	// )}
	// else{
	// 	return(
	// 		<header>

	// 	<nav id="nav" class="navbar">
	// 		<div class="container">

	// 			<div class="navbar-header">

	// 				<div class="navbar-brand">
	// 					<a href="index.html">
	// 						<img class="logo" src={logo} alt="logo"/>
	// 					</a>
	// 				</div>

	// 				<div class="nav-collapse">
	// 					<span></span>
	// 				</div>

	// 			</div>


	// 			<ul class="main-nav nav navbar-nav navbar-right">
	// 				<li><Link to="">Home</Link></li>
	// 				<li><a href="index.html#about">About</a></li>
	// 				<li><a href="index.html#portfolio">Portfolio</a></li>
	// 				<li><a href="index.html#service">Services</a></li>
	// 				<li><a href="index.html#pricing">Prices</a></li>
	// 				<li><a href="index.html#team">Team</a></li>
	// 				<li><a href="index.html#contact">Contact</a></li>
	// 			</ul>

	// 		</div>
	// 	</nav>


	// </header>
	 	)
	 }
