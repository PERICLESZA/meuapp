import React, {Component} from "react";

class App extends Component{

  constructor(props){
    super(props)
    this.state = {contar:0, nome:"Iniciar"}
    this.somar =  this.somar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  somar(){
    let state = this.state
    state.contar+=1
    state.nome='Somando!'
    this.setState(state)
  }

  diminuir(){
    let state = this.state
    if(state.contar===0){
      state.nome = "Iniciar"
      this.setState(state)
      alert("Ops, chegou a zero!")
      return
    }
    state.contar -= 1
    state.nome = 'Subtraindo!'
    this.setState(state)
  }

  render(){
    return(
      <div>
        <h1>Contador!</h1>
        <h2>{this.state.nome}</h2>
        <h3>
          <button onClick={this.diminuir}>-</button>
            {this.state.contar}
          <button onClick={this.somar}>+</button>
        </h3>
      </div>
    )
  }

}

export default App;