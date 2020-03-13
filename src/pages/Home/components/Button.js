import React, { Component } from 'react';
import './Button.css';

class Button extends Component{
    render(){
        return <div className="">
            <button 
                className={this.props.classe}
                type={this.props.type}>
                    <span>{this.props.nomeBotao}</span>
            </button>
        </div>
    }
}

export default Button;
