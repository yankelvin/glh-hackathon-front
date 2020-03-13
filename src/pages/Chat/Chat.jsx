import React, { Component } from "react";
import "./Chat.css";

// Components
import { Baloon } from "./components/Baloon";

export class Chat extends Component {
  render() { 
    return (
      <div className="container">
        <div className="row bar-header"></div>

        <div className="row">
          <img src={require("../../img/img-flor.png")} alt="" className="hre" />
        </div>

        <div className="row wall"></div>

        <div className="row">
          <div
            type="text"
            className="input-msg digitar"
            placeholder="Digitar"
          />
        </div>
      </div>
    );
  }
}
