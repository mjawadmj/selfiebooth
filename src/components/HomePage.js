import React, { Component } from 'react';
import {connect} from 'react-redux';
import {onEmailInput,onPassChange,onLogin,onSignOut,emptyForm,onRegister} from '../actions'
import { HeaderHome } from './common/HeaderHome';
import {Footer} from './common/footer'
import Loader from  '../assets/img/loader.gif'
import about1 from '../assets/img/about1.jpg'
import about2 from '../assets/img/about2.jpg'
import background2 from '../assets/img/background2.jpg'
import team1 from '../assets/img/team1.jpg'
import team2 from '../assets/img/team2.jpg'
import team3 from '../assets/img/team3.jpg'
import team4 from '../assets/img/team4.jpg'

import $ from 'jquery/src/jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


class HomePage extends Component {
  
  constructor(props){
    super(props);    
    this.state={
		modal:'login',
		password: '',
		conPass:''
	}

	
  }
  componentWillMount(){
	$(document).ready(function(){
		$("#preloader").delay(600).fadeOut();
		$('#nav .nav-collapse').on('click', function() {
			$('#nav').toggleClass('open');
		});
	
		$('.has-dropdown a').on('click', function() {
			$(this).parent().toggleClass('open-drop');
		});
	})	
  }

  componentWillReceiveProps(props){
	if(props.user !== null && this.props.user !==  props.user){
		$('#myModal').modal('hide');
		this.props.history.push('dashboard');
	}
  }
   validateEmail(email) {
	var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    	return re.test(String(email).toLowerCase());
	}
  

  onLoginValidate(){
	  
	  if(this.props.password !=='' && this.validateEmail(this.props.email)){
		  
		return false;
	  }
	  return true;
  }
  handleEmailChange(event){
	this.props.onEmailInput(event.target.value);
	
  }
  onRegister(){
	  this.props.emptyForm();
	  this.setState({
		  modal:'register'
	  })
  }
  onRegisterToLogin(){
	  this.props.emptyForm(null,()=>{});
	  this.setState({
		modal:'login',
		  password:null,
		  conPass:null
	  })
  }
  handlePasswordChange(event){
	this.props.onPassChange(event.target.value);
  }
  onLogin(){
	this.props.onLogin(this.props.email,this.props.password);
  }
  register(){
	this.props.onRegister(this.props.email,this.state.conPass)
  }
  renderModalContent(){
	
	if(this.props.loading){
		return(
			<div class="modal-body">
			<img src={Loader} style={{height:'auto' ,width:'100%'}}/>
			</div>
		)
	}  
	else if(this.state.modal === 'login'){
		  return(
			<div >
			<label htmlFor="emailInput">Email</label>
			<input type="email" id="emailInput" class="input" placeholder="Email"
				value={this.props.email}
				onChange={this.handleEmailChange.bind(this)}
			/> 
			<label for="passInput">Password</label>
			<input type="password" id="passInput" class="input" placeholder="Password"
			value={this.props.password}
			onChange={ this.handlePasswordChange.bind(this)}/> 
			<div className="row">
			<div className="col-md-8">
				<p style={{marginTop: 30,cursor:'pointer'}}>Don't Have An Account? <a onClick={this.onRegister.bind(this)}>Register Now!</a></p>
			</div>
			<div className="col-md-4">
				<button style={{margin:15,marginBottom:5}}
				id="inputButtonClick"
				 disabled={this.onLoginValidate()}
				 onClick={this.onLogin.bind(this)}
				 style={{opacity:this.onLoginValidate()?"0.5":"",margin:15,marginBottom:5}}
				 className="main-btn pull-right"
				 >Login</button>
			</div>
			</div>
		  </div>
		  )
	  }
	  else if(this.state.modal === 'register'){
		  return(
			<div >
				
			<label htmlFor="emailInput">Email</label>
			<input type="email" id="emailInput" class="input" placeholder="Email"
				value={this.props.email}
				onChange={this.handleEmailChange.bind(this)}
			/> 
			<label for="passInput">Password</label>
			<input type="password" id="passInput" class="input" placeholder="Password"
			value={this.state.password}
			onChange={ (event)=>{this.setState({password:event.target.value})}}/> 
			<label for="confirmPassInput">Confirm Password</label>
			<input type="password" id="confirmPassInput" className="input" placeholder="Password"
			value={this.state.conPass}
			onChange={(event)=>{this.setState({conPass:event.target.value})}}/> 
			<div className="row">
			<div className="col-md-8">
				<p style={{marginTop: 30,cursor:'pointer'}}>Already Have An Account? <a onClick={this.onRegisterToLogin.bind(this)}>Login Now!</a></p>
			</div>
			<div className="col-md-4">
				<button style={{margin:15,marginBottom:5}} 
				className="main-btn pull-right"
				disabled={this.state.conPass === this.state.password && this.state.password !==''&&this.validateEmail(this.props.email)?false:true}
				style={{opacity:this.state.conPass === this.state.password && this.state.password!=='' &&this.validateEmail(this.props.email)?"":"0.5",margin:15,marginBottom:5}}
				onClick={this.register.bind(this)}
				>Register</button>
			</div>
			</div>
		  </div>
			
		  )
	  }
  }
  render() {
    return (
      <div>
		  <HeaderHome
		  user={this.props.user!==null?true:false}
		  onSignOut ={this.props.onSignOut.bind(this)}
		  />
	<div id="service" class="section md-padding"/>

	
		<div class="container">

		
			<div class="row">

			
				<div class="section-header text-center">
					<h2 class="title">Welcome To Selfie Booth</h2>
				</div>
				
				<div class="col-md-4 col-sm-6">
					<div class="service">
						<i class="fa fa-diamond"></i>
						<h3>High Definition Images</h3>
						<p>Providing high definition DSLR Camera images</p>
					</div>
				</div>
				
				<div class="col-md-4 col-sm-6">
					<div class="service">
						<i class="fa fa-rocket"></i>
						<h3>Photo Prints</h3>
						<p>Print your picture in just one click</p>
					</div>
				</div>
				
				<div class="col-md-4 col-sm-6">
					<div class="service">
						<i class="fa fa-cogs"></i>
						<h3>Costumize Pictures</h3>
						<p>Costumize your picture with your favourite themes and props</p>
					</div>
				</div>
				
				<div class="col-md-4 col-sm-6">
					<div class="service">
						<i class="fa fa-diamond"></i>
						<h3>Great Packages</h3>
						<p>Exciting wide range of packages for enterprise user</p>
					</div>
				</div>
				
				<div class="col-md-4 col-sm-6">
					<div class="service">
						<i class="fa fa-pencil"></i>
						<h3>Email Your Pictures</h3>
						<p>You can email your captured pictures or can view them on your personalized dashboard</p>
					</div>
				</div>
				
				<div class="col-md-4 col-sm-6">
					<div class="service">
						<i class="fa fa-flask"></i>
						<h3>User Friendly Interface</h3>
						<p>User Friendly interface allow user to navigate with in application/website easily</p>
					</div>
				</div>
				

			</div>
			

		</div>
	

	
	


	
	<div id="features" class="section md-padding bg-grey">

		
		<div class="container">

			<div class="row">

				
				<div class="col-md-6">
					<div class="section-header">
						<h2 class="title">Why Choose Us</h2>
					</div>
					<p>We are targeting public event where general public cannot
						afford to capture there pictures at cheap cost and also
						cannot have them immediately. Because exiting systems
						only target at corporate level and only provide fixed
						packages.
						
						We are providing facilities like emailing your capture images
						to yourself for free, can also print them out at the same time
						at minimum rate</p>
					
				</div>
				
				<div class="col-md-6">
					<div id="about-slider" class="owl-carousel owl-theme">
						<img class="img-responsive" src={about1} alt=""/>
						<img class="img-responsive" src={about2} alt=""/>
						<img class="img-responsive" src={about1} alt=""/>
						<img class="img-responsive" src={about2} alt=""/>
					</div>
				</div>
			

			</div>
			

		</div>
		

	</div>
	
	<div id="numbers" class="section sm-padding">

		
		<div class="bg-img" style={{backgroundImage: `url(${background2})`}}>
			<div class="overlay"></div>
		</div>
		
		<div class="container">

			
			<div class="row">

			
				<div class="col-sm-3 col-xs-6">
					<div class="number">
						<i class="fa fa-users"></i>
						<h3 class="white-text"><span class="counter">451</span></h3>
						<span class="white-text">Happy clients</span>
					</div>
				</div>
				
				<div class="col-sm-3 col-xs-6">
					<div class="number">
						<i class="fa fa-trophy"></i>
						<h3 class="white-text"><span class="counter">12</span></h3>
						<span class="white-text">Awards won</span>
					</div>
				</div>
				
				<div class="col-sm-3 col-xs-6">
					<div class="number">
						<i class="fa fa-coffee"></i>
						<h3 class="white-text"><span class="counter">154</span>K</h3>
						<span class="white-text">Cups of Coffee</span>
					</div>
				</div>
				
				<div class="col-sm-3 col-xs-6">
					<div class="number">
						<i class="fa fa-file"></i>
						<h3 class="white-text"><span class="counter">45</span></h3>
						<span class="white-text">Projects completed</span>
					</div>
				</div>
			

			</div>
			

		</div>
		

	</div>
	
	<div id="pricing" class="section md-padding">

		
		<div class="container">

			
			<div class="row">

			
				<div class="section-header text-center">
					<h2 class="title">Pricing Table</h2>
				</div>
				
				<div class="col-sm-4">
					<div class="pricing">
						<div class="price-head">
							<span class="price-title">Silver Plan</span>
							<div class="price">
								<h3>RS 50k<span class="duration">/ month</span></h3>
							</div>
						</div>
						<ul class="price-content">
							<li>
								<p>1000 Pictures</p>
							</li>
							<li>
								<p>300 Prints</p>
							</li>
							<li>
								<p>Full dashboard support</p>
							</li>
						</ul>
						<div class="price-btn">
							<button class="outline-btn">Purchase now</button>
						</div>
					</div>
				</div>
				
				<div class="col-sm-4">
					<div class="pricing">
						<div class="price-head">
							<span class="price-title">Golden plan</span>
							<div class="price">
								<h3>RS 70k<span class="duration">/ month</span></h3>
							</div>
						</div>
						<ul class="price-content">
							<li>
								<p>2000 Pictures</p>
							</li>
							<li>
								<p>500 Prints</p>
							</li>
							<li>
								<p>Full dashboard support</p>
							</li>
						</ul>
						<div class="price-btn">
							<button class="outline-btn">Purchase now</button>
						</div>
					</div>
				</div>
				
				<div class="col-sm-4">
					<div class="pricing">
						<div class="price-head">
							<span class="price-title">Platinium plan</span>
							<div class="price">
								<h3>RS 1Lac<span class="duration">/ month</span></h3>
							</div>
						</div>
						<ul class="price-content">
							<li>
								<p>3000 pictures</p>
							</li>
							<li>
								<p>800 Prints</p>
							</li>
							<li>
								<p>Full dashboard support</p>
							</li>
						</ul>
						<div class="price-btn">
							<button class="outline-btn">Purchase now</button>
						</div>
					</div>
				</div>
				

			</div>
			

		</div>
		

	</div>
	
	<div id="team" class="section md-padding">

		
		<div class="container">

			
			<div class="row">

				
				<div class="section-header text-center">
					<h2 class="title">Our Team</h2>
				</div>
				
				<div class="col-sm-3">
					<div class="team">
						<div class="team-img">
							<img class="img-responsive" src={team1} alt="team1"/>
							<div class="overlay">
								<div class="team-social">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-google-plus"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
								</div>
							</div>
						</div>
						<div class="team-content">
							<h3>M Jawad Hussain</h3>
							<span>Developer/Graphic Designer</span>
						</div>
					</div>
				</div>
				
				<div class="col-sm-3">
					<div class="team">
						<div class="team-img">
							<img class="img-responsive" src={team2} alt="team2"/>
							<div class="overlay">
								<div class="team-social">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-google-plus"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
								</div>
							</div>
						</div>
						<div class="team-content">
							<h3>Rida Zafar</h3>
							<span>Lead Designer</span>
						</div>
					</div>
				</div>
				
				<div class="col-sm-3">
					<div class="team">
						<div class="team-img">
							<img class="img-responsive" src={team3} alt="team3"/>
							<div class="overlay">
								<div class="team-social">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-google-plus"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
								</div>
							</div>
						</div>
						<div class="team-content">
							<h3>Anas Waseem</h3>
							<span>Backend Developer</span>
						</div>
					</div>
				</div>
				
				<div class="col-sm-3">
						<div class="team">
							<div class="team-img">
								<img class="img-responsive" src={team4} alt="team4"/>
								<div class="overlay">
									<div class="team-social">
										<a href="#"><i class="fa fa-facebook"></i></a>
										<a href="#"><i class="fa fa-google-plus"></i></a>
										<a href="#"><i class="fa fa-twitter"></i></a>
									</div>
								</div>
							</div>
							<div class="team-content">
								<h3>Muhammad Taha</h3>
								<span>Marketing Manager</span>
							</div>
						</div>
					</div>
					
			</div>
		
		</div>
		

	</div>
	
	<div id="contact" class="section md-padding"/>

		
		<div class="container">

			
			<div class="row">

				
				<div class="section-header text-center">
					<h2 class="title">Get in touch</h2>
				</div>
				

				<div class="col-sm-4">
					<div class="contact">
						<i class="fa fa-phone"></i>
						<h3>Phone</h3>
						<p>512-421-3940</p>
					</div>
				</div>
				

			
				<div class="col-sm-4">
					<div class="contact">
						<i class="fa fa-envelope"></i>
						<h3>Email</h3>
						<p>email@support.com</p>
					</div>
				</div>
			

				
				<div class="col-sm-4">
					<div class="contact">
						<i class="fa fa-map-marker"></i>
						<h3>Address</h3>
						<p>1739 Bubby Drive</p>
					</div>
				</div>
			

			
				<div class="col-md-8 col-md-offset-2">
					<form class="contact-form">
						<input type="text" class="input" placeholder="Name"/>
						<input type="email" class="input" placeholder="Email"/>
						<input type="text" class="input" placeholder="Subject"/>
						<textarea class="input" placeholder="Message"></textarea>
						<button class="main-btn">Send message</button>
					</form>
				</div>
				

			</div>
			

		</div>
		
		<div id="myModal" class="modal fade" role="dialog"
		hidden={true}> 
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
	
        <h4 class="modal-title">{this.state.modal==='login'?"Login":"Register"}</h4>
      </div>
	  <div className="modal-body">
	  <div class="row">
	  <p style={{textAlign:'center',color:'red'}}>
	  
	  {this.props.error?this.props.error.message:""}</p>
	  </div>
	  {this.renderModalContent()}
	  </div>
    </div>

  </div>
</div>
<Footer/>
<div id="back-to-top"></div>
	<div id="preloader">
		<div class="preloader">
			<img src={Loader} style={{height:'auto' ,width:'100%'}}/>
		</div>
	</div>
</div>
    );
  }
}
const mapStateToProps =(state)=>{
	console.log(state)
	return{
		email:state.user.email,
		password:state.user.password,
		loading: state.user.loading,
		user:state.user.user,
		error:state.user.error
	}
}
export default connect(mapStateToProps,{onEmailInput,onPassChange,onLogin,onSignOut,emptyForm,onRegister})(HomePage);