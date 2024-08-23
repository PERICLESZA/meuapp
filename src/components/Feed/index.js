import React, {Component} from "react";

class Feed extends Component{
    render(){
        return(
            
            <div key={this.props.id}>
                <h3>{this.props.username} </h3>
                <a>{this.props.curtidas > 1 ? this.props.curtidas + " curtidas" : this.props.curtidas + " curtida" } / 
                   {this.props.comentario > 1 ? this.props.comentario + " comentários" : this.props.comentario + "comentário"} </a>
                <hr/>
            </div>
        )
    }
}

export default Feed;