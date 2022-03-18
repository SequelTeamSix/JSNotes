import * as React from 'react';
import axios from 'axios';

export class PokeCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon : {
                name : "pikachu",
                sprites : {front_default : "placeholder.jpg"}
            }
        }
    }
    // this is a hook:
    // hooks are triggered automatically at certain points of the react component lifecycle
    // this is called as soon as the component is creates
    componentDidMount(){
        axios.get(this.props.url).then(
            response=>
            {
                return response.data
            }
        ).then(data=> {
            this.setState({pokemon:data})
        })
    }
    render(){
        return(
            <div>
                <span>{this.state.pokemon.name} </span>
                <img src = {this.state.pokemon.sprites.front_default} />
            </div>
        )
    }
}