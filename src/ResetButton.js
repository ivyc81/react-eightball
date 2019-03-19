import React, { Component } from 'react';
// import './EightBall.css';
import EightBall from './EightBall';

class ResetButton extends Component {
    handleClick(evt){
        EightBall.setState({
            currentColor: 'black',
            currentMsg: 'Think of a Question.',
        });
    }

    render() {
        const style = {backgroundColor: 'red'};
        return (
            <button className="ResetButton" onClick={ this.handleClick } style={style}>
                Reset
            </button>
        );
    }
}

export default ResetButton;