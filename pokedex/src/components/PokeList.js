import * as React from 'react';
import axios from 'axios';
import {PokeCard} from './PokeCard'
import { ClickButton } from './ClickButton';

// install and import axios later for rest api calls

// you may encounter function-based components and class-based components
// i prefer class, but both are valid
export class PokeList extends React.Component {
    
    constructor(props){
        super(props);
        this.state= {
            type:"My Pokemon",
            numPokeBalls:0,
            pokemon:[]
        }
        // I'll implement a state later
    }

    generatePokemon(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(
            response => { 
                // your API might not use .results: make sure the structure conforms to whatever you make
                // in backend
                let myPokemonResponse = response.data.results;
                console.log(myPokemonResponse);
                this.setState({pokemon: myPokemonResponse});
            }
        )
    }
    buyPokeBall(){
        let currentPokeBalls = this.state.numPokeBalls+1;
        this.setState({numPokeBalls : currentPokeBalls});
    }
    usePokeBall(){
        if(this.state.numPokeBalls > 0){
            let currentPokeBalls = this.state.numPokeBalls-1;
            this.setState({numPokeBalls : currentPokeBalls});
        }
    }
// all react components must have render
    render(){
        return (
            <div>
                <button onClick={()=>this.generatePokemon()}>Click to generate all pokemon!</button>
                <ClickButton buyPokeBall={this.buyPokeBall.bind(this)}/>
                {
                    this.state.numPokeBalls >0 &&
                    <button onClick={()=>this.usePokeBall()}>Click to use pokeball!</button>
                }
                <p>Number of pokeballs : {this.state.numPokeBalls}</p>
                <ul>
                {
                    this.state.pokemon.map(pokemon => <PokeCard key = {pokemon.name} name = {pokemon.name} url = {pokemon.url}/>)
                }
                </ul>
            </div>
        )
    }

}