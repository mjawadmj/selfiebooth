import React, { Component } from 'react';
import {connect} from 'react-redux';
class Dashboard extends Component {
  
  constructor(props){
    super(props);    
  }
  
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
    return{
        name : state.user.name
    }
}
export default connect(mapStateToProps)(Dashboard);