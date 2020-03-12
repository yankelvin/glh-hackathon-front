import React, { Component } from 'react';

class Button extends Component{
    render(){
        return <div className="">
            <button 
                className="{this.props.classeComplementar}" 
                type="{this.props.type}">
                    {this.props.nomeBotao}
            </button>
        </div>
    }
}

export default Button;
