import React, {Component} from "react";
import Feed from "./components/Feed"
class App extends Component{


    constructor(props){
        super(props)
        this.state = {
            feed: [
                {id:1, username:'Péricles', curtidas:10, comentarios:2},
                {id:2, username:'Laís', curtidas:100, comentarios:22},
                {id:3, username:'Lize', curtidas:510, comentarios:92},
                {id:4, username:'Leo', curtidas:0, comentarios:1},
            ]
        }
    }

    render(){
        return(
            <div>
                {this.state.feed.map((item)=>{
                    return(
                        <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentario={item.comentarios}/>
                    )
                })}
            </div>
        )
    }
}

export default App;