async function a(){
    let response = await fetch("https://tedswebapp1.azurewebsites.net", {Access-Control-Allow-Origin: *})
    console.log(response.json);
}
a();