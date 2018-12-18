import React from 'react';
import logo from '../../assets/img/logo.png';
import background1 from '../../assets/img/background1.jpg'
import altLogo from '../../assets/img/logo-alt.png';
import { HashLink as Link } from 'react-router-hash-link';
export const Header =(user,onSignOut)=>{
    return(
        		<header>
    
        	<nav id="nav" class="navbar">
        		<div class="container">
    
        			<div class="navbar-header">
    
        				<div class="navbar-brand">
        					<a href="index.html">
        						<img class="logo" src={logo} alt="logo"/>
        					</a>
        				</div>
    
        				<div class="nav-collapse">
        					<span></span>
        				</div>
    
        			</div>
    
    
        			<ul class="main-nav nav navbar-nav navbar-right">
        				<li><Link to="/#home" >Home</Link></li>
        				<li><Link to="/#service">Services</Link></li>
        				<li><Link to="/#features">About</Link></li>
                        <li><Link to="/#pricing">Prices</Link></li>
        				<li><Link to="/#team">Team</Link></li>
        				<li><Link to="/#contact">Contact</Link></li>
                        {user && <li><Link to="/" 
					    onClick={onSignOut}
					    >Sign Out</Link></li>}
        			</ul>
    
        		</div>
        	</nav>
    
    
        </header>)
}