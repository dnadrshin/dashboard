import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import Temperature from './component/Temperature';
import Pressure from './component/Pressure';
import LineChart from './component/LineChart';
import BarChart from './component/BarChart';

var promise = fetch("http://private-4945e-weather34.apiary-proxy.com/weather34/rain").then(function (response) {
                  response.json().then(function(data) {  
                    console.log('data from server', data[0].days);  
                    let data_bar = data[0].days.map(item=>{
                      return item.amount;
                    });
                    store.dispatch({type: 'AJAX_CHANGE', data_arr: data[0].days, data_bar:data_bar})
                  });
              });

let initialSore = {
  temperature: 15,
  pressure: 1000,
  data_arr: [],
  data_bar:[],
  data_line: [[],[],[]]
}

/**
 * return array for charts
 */
function chanceOfRain(pressure, temperature, amount) {
    var score = Math.log(amount + 1) * Math.log(pressure - 929)  * Math.log(temperature - 9);
    var mean = Math.min(Math.max(score, 0), 100);
    var upper_bound = Math.min(1.5 * mean, 100);
    var lower_bound = Math.max(0.5 * mean, 0);
    return [lower_bound, mean, upper_bound];
}
/**
 * @return {[Array]}
 */
let onChangeData = function(Days, pressure, temperature){
    let data=[[],[],[]];
    Days.forEach(function(item){
      var moreData = [[],[],[]];
      moreData = chanceOfRain(pressure, temperature, item.amount);
      /*Add data to arrays to visual by plugin*/
      data[0].push(moreData[0]);
      data[1].push(moreData[1]);
      data[2].push(moreData[2]);
    })
    return data
  }


/**
 * Reducer
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
function counter(state = initialSore, action) {
  let temperature = state.temperature;
  let pressure = state.pressure;
  let data_arr = state.data_arr;
  let data_bar = state.data_bar;
  switch (action.type) {
    case 'TEMP_CHANGE':{
      let data_line = onChangeData(data_arr, pressure, action.temperature);
      return {temperature: action.temperature, pressure: pressure, data_arr: data_arr, data_bar: data_bar, data_line: data_line}
    }

    case 'PRESS_CHANGE':{
      let data_line = onChangeData(data_arr, action.pressure, temperature);
      return {temperature: temperature, pressure: action.pressure, data_arr: data_arr, data_bar: data_bar, data_line: data_line}
    }
    case 'AJAX_CHANGE':{
      let data_line = onChangeData(action.data_arr, pressure, temperature);
      return {temperature: temperature, pressure: pressure, data_arr: action.data_arr, data_bar: action.data_bar, data_line: data_line}
    }
    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe(() =>{
    console.log(store.getState());
  }
)

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="small_container"><Temperature /></div>           
          <div className="small_container"><LineChart /></div>  
          <div className="small_container"><Pressure /></div>             
          <div className="small_container"><BarChart /></div>             
        </div>
      </Provider>
    );
  }
}