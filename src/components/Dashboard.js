import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Header} from './common/Header'
import {onSignOut,onRetrieveImages} from '../actions/';
import { Footer } from './common/footer';
import Loader from '../assets/img/loader.gif'
import $ from 'jquery/src/jquery';
import {fire} from '../config/Global'
import _ from 'lodash';
import Gallery from 'react-grid-gallery';
class Dashboard extends Component {
  
  constructor(props){
    super(props); 
    this.state={
      images:null,
      convertedArray:[]
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
  if(this.props.user === null){
    this.props.history.push('');
  }
  else{
    this.props.onRetrieveImages(this.props.user.uid)
  }
  
  
}
componentWillReceiveProps(props){
      if(this.state.images !== props.images)
      {
        this.setState({
          images:props.images
        },()=>{
          var arr =[];
          if(this.state.images !==null){
         
          (_.values(this.state.images)).forEach(function(object) {
            console.log(object)
            arr.push({
              src:object.url,
              thumbnail: object.url,
              thumbnailWidth:320,
              thumbnailHeight:212
            })
          });
         
        }
          this.setState({
            convertedArray:arr
          })
        })
      }
}
  
//   fire.database().ref('Images/').child(this.props.user.uid).push({
//     url: "http://buzzive.com/wp-content/uploads/2015/03/297.jpg"
//   }).then((data)=>{
//     //success callback
//     console.log('data ' , data)
// }).catch((error)=>{
//     //error callback
//     console.log('error ' , error)
// })

  render() {
    console.log(this.state.convertedArray)
    return (
      <div>
        <Header 
        user={this.props.user}
        onSignOut={this.props.onSignOut.bind(this)}
        />
        <div className="section md-padding bg-grey">
        <div className="container" >

          <div className="row" style={{width:'80%'}}>
          <div class="col-md-6">
					<div class="section-header">
						<h2 class="title">Images of You</h2>
					</div>
          </div>
          </div>
          <div className="row" style={{width:'80%'}}>
            <Gallery images={this.state.convertedArray}/>
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
    return{
        user: state.user.user,
        name : state.user.name,
        images: state.user.images
    }
}
export default connect(mapStateToProps,{onSignOut,onRetrieveImages})(Dashboard);