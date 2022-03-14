// dom manipulation:
// we can change elements in the html document
// by accessing the DOM
// grabbing its elements
// and modifying them in some way
// (like changing innerText, changing img source, etc)

var ChangingSpan = document.getElementById('ChangingSpan');

var ClickMeButton = document.getElementById('ClickMeButton');

ClickMeButton.onclick = ChangeText;

function ChangeText() {

    ChangingSpan.innerHTML="The Spans They Are A Changing";

}

var a = 5;
console.log(a);
a = "Five";
console.log(a);
a = function(){
    console.log("What???");
}
a();

/*
regular ol' types:
string
number
boolean
null
undefined
object
symbol (niche)
*/

b = 5;
c = '5';
if(b==c){
    console.log("5==\"5\"");
}

if(b===c){
    console.log("5===\"5\"");
}else{
    console.log("NOT 5===\"5\"")
}

console.log('5'+1);
console.log(1+'5');

function calledFunc(){
    console.log("Calling calledFunc!");
}
function callback(func){
    console.log("calling param: ");
    func();
}
callback(calledFunc);

var arr = [9, 7, 2, 7 ,3 ,5, 0, 1];

function filteringFunction(element) {
    return ((element % 3) == 0);
}
arr =  arr.filter(filteringFunction);
/*
    filter {
        if (filteringfunction(arr[i])){
            newArr + arr[i]
        }
        return newArr;
    }
*/
console.log(arr);