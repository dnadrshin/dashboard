import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import expect, { createSpy, spyOn, isSpy } from 'expect';
import CountData from './reducers';
import Temperature from './component/Temperature';
import Pressure from './component/Pressure';
import LineChart from './component/LineChart';
import BarChart from './component/BarChart';

/**
 * get data AJAX via fetch
 * @param  {Function} data) {                                 let data_bar [array of data]
 * @return {[type]}         [description]
 */
fetch('http://private-4945e-weather34.apiary-proxy.com/weather34/rain').then(function (response) {
                  response.json().then(function(data) {  
                    let data_bar = data[0].days.map((item)=>{
                      return item.amount;
                    });
                    store.dispatch({type: 'AJAX_CHANGE', data_arr: data[0].days, data_bar})
                  });
              });


let store = createStore(CountData)

store.subscribe(() =>{
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