import $ from 'jquery/src/jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

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

	

	window.addEventListener('scroll',function() {
		var wScroll = $(this).scrollTop();


		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});
  })