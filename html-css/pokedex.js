let apiURL = 'https://pokeapi.co/api/v2/pokemon/';

document.getElementById('GetData').onclick = getData;

async function getData() {
    // If using input for identifiers, etc.
    // For example, if using PokeAPI, this may be the Pokemon's ID.
    let userInput = document.getElementById('PokedexIDInput').value; 

    // Emptying out the div before inserting new data.
    document.getElementById('data').innerHTML = '';

    let response = await fetch(apiURL + userInput);

    if (response.status === 200) {
        let data = await response.json();
        populateData(data);
    } else {
        dataSection.innerHTML = 'It Got Away!';
    }
}

function populateData(response) {
    console.log(response);
    let dataSection = document.getElementById('data');
    
    let nameTag = document.createElement('h3');
    nameTag.innerHTML =  capitalize(response.name);
    let abilitiesArray = response.abilities;
    let abilities = document.createElement('ul');
    for (const ability of abilitiesArray)
    {
        let abilityLi = document.createElement('li');
        abilityLi.innerHTML = capitalize(ability.ability.name);
        abilities.appendChild(abilityLi);
    }

    dataSection.appendChild(nameTag);
    dataSection.innerHTML += 'Abilities<br>';
    dataSection.appendChild(abilities);

    let spritesObject = response.sprites;
    for (const sprite in spritesObject) {
        if(spritesObject[sprite]) {
            if((typeof spritesObject[sprite]) != 'object'){
                let spriteImg = document.createElement('img');
                spriteImg.src = spritesObject[sprite];
                dataSection.appendChild(spriteImg);
            }
        }
    }
}

/*
    The PokeAPI returns Pokemon's information as all lowercase.
    This function is used to fix this when processing data.
*/
function capitalize(str) {
    if (str)
        return str.charAt(0).toUpperCase() + str.slice(1);
    else
        return '';
}
