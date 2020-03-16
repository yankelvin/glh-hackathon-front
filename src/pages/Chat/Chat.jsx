import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import "./Chat.css";


// Components
//import { Baloon } from "./components/Baloon";
export class Chat extends Component {
  render() { 
    return (
      <div className="container">
        <div className="row bar-header">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className=""/>
          </Link>
        </div>

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
