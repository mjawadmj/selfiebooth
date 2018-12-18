import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Header} from './common/Header'
import {onSignOut} from '../actions/';
import { Footer } from './common/footer';
import $ from 'jquery/src/jquery';
class Dashboard extends Component {
  
  constructor(props){
    super(props);    
  }
  componentWillMount(){
    $(document).ready(function(){
  $('#about-slider').owlCarousel({
    items:1,
    loop:true,
    margin:15,
    nav: true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots : true,
    autoplay : true,
    animateOut: 'fadeOut'
  });
    $("#nav .main-nav a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 600);
    });
    $('body').scrollspy({
      target: '#nav',
      offset: $(window).height() / 2
    });
    $('#back-to-top').on('click', function(){
      $('body,html').animate({
        scrollTop: 0
      }, 600);
    });

    $('#nav .nav-collapse').on('click', function() {
      $('#nav').toggleClass('open');
    });
  
    $('.has-dropdown a').on('click', function() {
      $(this).parent().toggleClass('open-drop');
    });

    window.addEventListener('scroll',function() {
      var wScroll = $(this).scrollTop();
  

      wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
  
      wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
    });
    })
  if(this.props.user === null){
    this.props.history.push('');
  }
  


  
  

  
}
  render() {
    return (
      <div>
        <Header 
        user={this.props.user}
        onSignOut={this.props.onSignOut.bind(this)}
        />
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
    return{
        user: state.user.user,
        name : state.user.name
    }
}
export default connect(mapStateToProps,{onSignOut})(Dashboard);