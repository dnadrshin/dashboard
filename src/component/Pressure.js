import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';


class Pressure extends Component {
  constructor(props){
    super(props);
    this.state = {
      pressure: 1000
    }
  }
    render() {
    const { storeData } = this.context;
    console.log(this.props);
    //let temp = this.props.store.getState();
    return (
      <div>
        <lable>Pressure: {this.props.store.pressure}</lable><br/>
        <input 
          type="range" min="970" max="1030" step="1" 
          onChange={(e=>{this.props.onInputChange(e)
          }).bind(this)}/>
      </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => {
      dispatch({type: 'PRESS_CHANGE', pressure: e.target.value})
    }
  }
}

const PressureC = connect(mapStateToProps, mapDispatchToProps)(Pressure)

export default PressureC;