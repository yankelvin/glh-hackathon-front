import React, { Component } from "react";

//Estilo
import './Home.css';

// Components
import Button from './components/Button';

export class Home extends Component {
  render() {
    return(  
      <div className="container estilo col-12">
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center">
              <h2 className="font-italic display-4">Eu quero</h2>
            </div>
          </div>

          <div className="col-12">
            <div className="row justify-content-center">
              <Button type="button" nomeBotao="Receber Ajuda" 
              classe="button-home button-ajudar"/>    
            </div>
          </div>

          <div className="col-12">
            <div className="row justify-content-center">
              <Button type="submit" nomeBotao="Ajudar" 
              classe="button-home button-receber-ajuda"/> 
            </div>
          </div>
        </div>        
        <div className="col-12"></div>
     </div>
    )
          
  }
}
