var apiURL = 'http://pokeapi.co/api/v2/pokemon/';
document.getElementById('GetData').onclick = getData;
function getData() {
    // AJAX
    var userInput = document.getElementById('PokedexIDInput').value;
    // 4 steps to ajax:
    // step 1: create a xmlhttprequestobject

    var xhttp = new XMLHttpRequest();

    // set a callback function for when the ready state changes
    xhttp.onreadystatechange = receiveData;

    // open a request
    xhttp.open('GET', apiURL + ''+ userInput);

    // send the request
    xhttp.send();

    function receiveData(){
        /*
        AJAX has several different states:
        0:unsent
        1:opened
        2:headers received
        3:loading
        4:done
        */
       var dataSection = document.getElementById('data');
       dataSection.innerHTML = '';
       if(xhttp.readyState === 4){
           if(xhttp.status === 200){
            //    200 as http response means 'OK'
            var response = xhttp.responseText;
            response = JSON.parse(response);
            populateData(response, dataSection);
            console.log(response);
           }
       }
    }
}
function populateData(response, section){
    var nameTag = document.createElement('h3');
    nameTag.innerHTML=response.name;

    section.appendChild(nameTag);

    var sprites = response.sprites;

    var spriteImg = document.createElement('img');
    spriteImg.src = sprites.back_default;
    section.appendChild(spriteImg);
}