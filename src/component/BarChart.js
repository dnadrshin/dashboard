import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';



class LineChart extends Component {
	render() {
		let chartData = {
			labels: ['1', '2', '3', '4', '5', '6', '7'],
			datasets: [
				{
					label: 'Weather Amount',
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

const LineChartC = connect(mapStateToProps)(LineChart)


export default LineChartC;