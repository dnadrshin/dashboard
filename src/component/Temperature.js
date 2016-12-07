import React, { Component } from 'react';
import { connect } from 'react-redux';


class Temperature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 15
        }
    }
    render() {
        return (
            <div>
                <lable>Temperature: {this.props.todos.temperature}</lable><br />
                <input
                    type="range" min="10" max="35" step="1"
                    onChange={((e) => { this.props.onInputChange(e) }).bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (e) => {
            dispatch({ type: 'TEMP_CHANGE', temperature: e.target.value })
        }
    }
}

const TemperatureC = connect(mapStateToProps, mapDispatchToProps)(Temperature)

export default TemperatureC;
