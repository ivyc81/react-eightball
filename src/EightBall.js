import React, { Component } from 'react';
import './EightBall.css';

class EightBall extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentColor: 'black',
            currentMsg: 'Think of a Question.',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        answers: [
            { msg: "It is certain.", color: "green" },
            { msg: "It is decidedly so.", color: "green" },
            { msg: "Without a doubt.", color: "green" },
            { msg: "Yes - definitely.", color: "green" },
            { msg: "You may rely on it.", color: "green" },
            { msg: "As I see it, yes.", color: "green" },
            { msg: "Most likely.", color: "green" },
            { msg: "Outlook good.", color: "green" },
            { msg: "Yes.", color: "green" },
            { msg: "Signs point to yes.", color: "goldenrod" },
            { msg: "Reply hazy, try again.", color: "goldenrod" },
            { msg: "Ask again later.", color: "goldenrod" },
            { msg: "Better not tell you now.", color: "goldenrod" },
            { msg: "Cannot predict now.", color: "goldenrod" },
            { msg: "Concentrate and ask again.", color: "goldenrod" },
            { msg: "Don't count on it.", color: "red" },
            { msg: "My reply is no.", color: "red" },
            { msg: "My sources say no.", color: "red" },
            { msg: "Outlook not so good.", color: "red" },
            { msg: "Very doubtful.", color: "red" },
        ]
    }

    /** returns a random answer object from this.props.answers */

    getRandom(){
        return this.props.answers[Math.floor(Math.random()*this.props.answers.length)];
    }

    handleClick(evt){
        const { msg, color} = this.getRandom();

        this.setState({
            currentColor: color,
            currentMsg: msg,
        });
    }

    render() {
        const style = {backgroundColor: this.state.currentColor};
        return (
            <div className="EightBall" onClick={ this.handleClick } style={style}>
                <b>{ this.state.currentMsg }</b>
            </div>
        );
    }
}

export default EightBall;