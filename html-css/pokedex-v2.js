//import { Pokemon } from './pokemon';
/*
    What do we need?

    Our toolbox:

    HTML
        -Bootstrap later
    CSS
        -selectors
    JS
        -Fetch API
            -Promises, async/await
            -JSON
        -Event listeners
        -DOM manipulation

    dataInput : our input box
    getData : our button
    data: our HTML section
*/

var dataInputBox = document.getElementById('dataInput');
var catchPokemonButton = document.getElementById('getData');
var dataSection = document.getElementById('data');
var listSection = document.getElementById('list');
var nameInputBox = document.getElementById('nameInput');
var nameButton = document.getElementById('getName');
const apiURL = 'http://pokeapi.co/api/v2/';
var allPokemonArr = [];
var caughtPokemonArr = [];


/*
Monday we took care of events by saying something like button.onclick = doSomething()
Instead we pass in the method type, as well as a function that we will use as a *callback*
Meaning: a callback function is a function passed in as a parameter that will be executed later
*/



catchPokemonButton.addEventListener('click', catchPokemon);

function catchPokemon(){
    caughtPokemonArr.push(currentPokemon);
    let allCaughtPokemonNames = '';
    
    caughtPokemonArr.forEach(pokemon => allCaughtPokemonNames = allCaughtPokemonNames+(pokemon.name+', '))
    alert(allCaughtPokemonNames);
}

/*async function:
meaning, asynchronous function:
it allows for asynchronous execution while waiting for an await*/
async function generateData(url) {
    /*
        rudimentary DOM manipulation:
        DOM?
        Document Object Model
        it's a tree representation of the structure of the page
    */
    /*dataSection.innerHTML = 'PokePlaceholder';*/
    let userInput = dataInputBox.value;
    /*
    *Await*
    (wait)
    for a
    *Promise*
    (some variable that will eventually be filled)
    */
    let response = await fetch (url);
    console.log(response);
    if(response.status === 200){
        let data = await response.json();
        console.log(data);
        populateData(data);
    }else{
        dataSection.innerHTML = 'It Got Away!';
    }
}
function populateData(pokemonObject) {
    /*
    Clear the datasection so that we don't have multiple bulbasaurs
    */
    dataSection.innerHTML='';
    /*
    Create a nametag
    */
    let nameTag = document.createElement('h3');
    nameTag.innerHTML = pokemonObject.name;
    dataSection.appendChild(nameTag);
    for(let spriteNum in pokemonObject.sprites){
        /*
            Because JS doesn't ever care much about types,
            every variable is technically equivalent to a boolean
            what this means is certain variables are false and certain are true
            generally this follows a sensible pattern:
            null, 0, and '' are false
            most everything else is true
            These are called 'truthy' and 'falsy' values

            This stems from a larger understanding that JS is *loosely types*
            as opposed to Java, *strongly typed*
        */
        if(pokemonObject.sprites[spriteNum] && (typeof pokemonObject.sprites[spriteNum] != 'object')) {
            let spriteImg = document.createElement('img');
            spriteImg.src = pokemonObject.sprites[spriteNum];
            dataSection.appendChild(spriteImg);
        }
        /*
        ul: unordered list
        ol: ordered list
        both contain 'li' (list items) as children
        */
        
    }
    let abilitiesList = document.createElement('ul');
        for(let abilityNum in pokemonObject.abilities){
            let ability = document.createElement('li');
            ability.innerHTML = pokemonObject.abilities[abilityNum].ability.name;
            abilitiesList.appendChild(ability);
        }
        dataSection.appendChild(abilitiesList);

}

nameInputBox.addEventListener('input', populateList);

async function generateList() {
    let response = await fetch (apiURL + 'pokemon?limit=151');
    console.log(response);
    if(response.status === 200){
        let data = await response.json();
        console.log(data);
        for(let pokemon of data.results){
            let newPokemon = new Pokemon(pokemon.name, pokemon.url);
            allPokemonArr.push(newPokemon);
        }
    }else{
        dataSection.innerHTML = 'It Got Away!';
    }
}

function compareNames(name1, name2){
    if(name1<name2){
        return 1;
    }else{
        return -1;
    }
}

function populateList(){
    console.log("onchange?");
    listSection.innerHTML = '';
    pokemonName = nameInputBox.value;

    /*
        we are passing in a function to methods like filter, map, or sort
        that determine what to do with any particular element

    */
    pokeList = allPokemonArr.filter(pokemon => pokemon.name.includes(pokemonName));
    pokeList.map(pokemon => pokemon.name = pokemon.name.toUpperCase());
    pokeList.sort((p1, p2) =>  {
        if(p1.name>p2.name){
            return 1;
        }else{
            return -1;
        } });

    pokemonList = document.createElement('ol');
    for(let pokemon of pokeList){
        console.log(pokemon);
        pokemonListItem = document.createElement('li');

        pokemonListItem.innerHTML = pokemon.name;
        pokemonListItem.onclick = changeCurrentPokemon;

        pokemonList.appendChild(pokemonListItem);
    }
    listSection.appendChild(pokemonList);
}

generateList();

function changeCurrentPokemon(event){
    pokeName = event.target.innerHTML;
    pokeObject = allPokemonArr.filter(pokemon => pokemon.name == pokeName)[0];
    currentPokemon = pokeObject;
    generateData(pokeObject.url);
    //alert("Current pokemon changed to "+ pokeObject.name + pokeObject.url);
}

class Pokemon {
    constructor(name, url){
        this.name = name;
        this.url = url;
    }
    toString(){
        return this.name + ' : ' + this.url;
    }
}

/*this var is still accessible throughout the entire js file
how?
hoisting - js 'hoists' things like vars, functions, class declarations to the top of the file*/
var currentPokemon;
/*that can be disabled with 'use strict'*/