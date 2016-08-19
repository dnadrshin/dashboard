mport React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'; 
import Chart from 'chart.js';
import {Bar} from 'react-chartjs-2';



class LineChart extends Component {
	render(){
	console.log(this.props.store.data_bar);	
	let chartData = {
		  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		  datasets: [
		    {
		      label: 'My First dataset',
		      backgroundColor: 'rgba(255,99,132,0.2)',
		      borderColor: 'rgba(255,99,132,1)',
		      borderWidth: 1,
		      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		      hoverBorderColor: 'rgba(255,99,132,1)',
		      data: this.props.store.data_bar
		    }
		  ]
		};	
		return <Bar data={chartData} />
	}
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
}

const LineChartC= connect(mapStateToProps)(LineChart)


export default LineChartC;