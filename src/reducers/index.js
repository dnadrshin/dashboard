import { combineReducers } from 'redux';
import chanceOfRain from '../calculation';
import initialStore from './initialStore';



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
 * @param  {[state]}
 * @param  {[action]}
 * @return {[type]}
 */
function counter(state = initialStore, action) {
  let temperature = state.temperature;
  let pressure = state.pressure;
  let data_arr = state.data_arr;
  let data_bar = state.data_bar;
  switch (action.type) {
    case 'TEMP_CHANGE':{
      let data_line = onChangeData(data_arr, pressure, action.temperature);
      return {temperature: action.temperature, pressure, data_arr, data_bar, data_line}
    }
    case 'PRESS_CHANGE':{
      let data_line = onChangeData(data_arr, action.pressure, temperature);
      return {temperature, pressure: action.pressure, data_arr, data_bar, data_line}
    }
    case 'AJAX_CHANGE':{
      let data_line = onChangeData(action.data_arr, pressure, temperature);
      return {temperature, pressure, data_arr: action.data_arr, data_bar: action.data_bar, data_line}
    }
    default:
      return state
  }
}

export default counter;