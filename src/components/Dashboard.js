import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Header} from './common/Header'
import {onSignOut} from '../actions/';
import { Footer } from './common/footer';
class Dashboard extends Component {
  
  constructor(props){
    super(props);    
  }
  componentWillMount(){
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