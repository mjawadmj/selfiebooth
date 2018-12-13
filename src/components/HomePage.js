import React, { Component } from 'react';
import {connect} from 'react-redux';
import {onSave} from '../actions'
class HomePage extends Component {
  
  constructor(props){
    super(props);    
    this.state={
        name:null
    }
  }
  handleChange(event){
     this.setState({
         name:event.target.value
     })
  }
  buttonClicked(){
      this.props.onSave(this.state.name)
  }
  render() {
    return (
      <div>
          <input type="text" onChange={this.handleChange.bind(this)} ></input>
          <button onClick={this.buttonClicked.bind(this)}>Submit</button>
      </div>
    );
  }
}
export default connect(null,{onSave})(HomePage);