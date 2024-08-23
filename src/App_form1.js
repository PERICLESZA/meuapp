import React, {Component} from "react";


class App extends Component{


    constructor(props){
        super(props)
        this.state = {
            nome:'',
            email:'',
            senha:'',
            erro:''
        }
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(event){
        const {nome, email, senha} = this.state

        if(nome !== '' && email !== '' && senha !== '' ){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
        }else{
            this.setState({erro: 'Ops! Parece que está daltando algo!'})
        }
        
        event.preventDefault()

    }

    render(){
        return(
            <div>
                <form onSubmit={this.cadastrar}>
                    <h1>Novo Usuário</h1>
                    {this.state.erro && <p>{this.state.erro}</p>}
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome} onChange={(e)=>this.setState({nome:e.target.value})}></input> <br/>
                    <label>E-mail:</label>
                    <input type="text" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}></input> <br/>
                    <label>Senha:</label>
                    <input type="text" value={this.state.senha} onChange={(e)=>this.setState({senha:e.target.value})}></input> <br/>
                    <button type="submit">Cadastrar</button>
                </form>

            </div>
        )
    }
}

export default App;