import React, {Component} from "react";

class App extends Component{

    constructor(props){
        super(props)
        this.state = {form:{nome:'',email:'', senha:'', sexo:"masculino", erro:''}}
        this.dadosForm = this.dadosForm.bind(this)
    }

    dadosForm(e){
        let form = this.state.form
        form[e.target.name] = e.target.value
        this.setState({form:form})
    }

    render(){
        return(
            <div>
                <h1>Novo Usuário</h1>
                {this.state.erro && <p>{this.state.erro}</p>}
                <label>Nome:</label>
                <input type="text" name="nome" value={this.state.form.nome} onChange={this.dadosForm}></input> <br/>
                <label>E-mail:</label>
                <input type="text" name="email" value={this.state.form.email} onChange={this.dadosForm}></input> <br/>
                <label>Senha:</label>
                <input type="text" name="senha" value={this.state.form.senha} onChange={this.dadosForm}></input> <br/>
                <label>Sexo:</label>
                <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
                    <option value='masculino'>Masculino</option>
                    <option value='feminino'>Feminino</option>
                    <option value='ninformar'>Prefiro não informar</option>
                </select><br/><br/>
                <div>
                    <h3>{this.state.form.nome}</h3>
                    <h3>{this.state.form.email}</h3>
                    <h3>{this.state.form.senha}</h3>
                    <h3>{this.state.form.sexo}</h3>
                </div>
            </div>
        )
    }
}

export default App;