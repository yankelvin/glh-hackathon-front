import React, { Component } from "react";

import Button from './components/Button';

// Components

export class Home extends Component {
  render() {
    return  <div className="container">
      <div className="row">
        <div className="col-12">
          <Button type="submit" nomeBotao="Ajudar"/>
          <Button type="submit" nomeBotao="Quero ajudar"/>
        </div>
      </div>
    </div>;
  }
}
