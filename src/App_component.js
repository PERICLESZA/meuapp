import React, { Component } from "react";

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
        <Social/>
        <hr/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Meu nome é: {this.props.nome}</h2>        
        <h3>Cargo: {this.props.cargo} </h3>
        <h3>idade: {this.props.idade} </h3>
      </div>
    )
  }
}

const Social = () => {
  return(
    <div>
      <a>Facebook </a>
      <a>LinkedIn </a>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Péricles Zacarias Abrahão" cargo="FullStack" idade="56"/>
      <Equipe nome="Laís Gevaerd Abrahão" cargo="Engenharia Mecânica" idade="21"/>
      <Equipe nome="Lize Kuster Gevaerd" cargo="Jornalista" idade="55"/>
    </div>
  );
}

export default App;
