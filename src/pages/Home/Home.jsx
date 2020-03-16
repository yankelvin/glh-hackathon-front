import React, { Component } from "react";
 import { Redirect } from 'react-router'


//Estilo
import './Home.css';

// Components
import Button from './components/Button';

export class Home extends Component {

  state = {
    redirect: false
  }

  setRedirect = () =>{
    this.setState({
      redirect: true
    })
  }

  renderRedirectToChat = () => {
    if(this.state.redirect){
      return <Redirect to="/chat" />
    }
  }

  renderRedirectToLogin(){
    if(this.state.redirect){
      return <Redirect to="/chat" />
    }
  }

  render() {
    return(  
      <div className="container estilo col-12">
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center">
              <h2 className="font-italic display-4">
                Eu quero
              </h2>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="row justify-content-center">
              {this.renderRedirectToChat()}
              <Button type="button" nomeBotao="Receber Ajuda" 
              classe="button-home button-ajudar" 
              onClick={this.setRedirect} />   
            </div>
          </div>

          <div className="col-12">
            <div className="row justify-content-center">
              {this.renderRedirectToLogin()}
              <Button type="submit" nomeBotao="Ajudar" 
              classe="button-home button-receber-ajuda"
              onClick={this.setRedirect}/> 
            </div>
          </div>
        </div>        
        <div className="col-12"></div>
     </div>
    )
          
  }
}
