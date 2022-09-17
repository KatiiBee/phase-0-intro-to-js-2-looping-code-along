// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "suprise";

function writeCards(names, event) {
    let messages=[];
    for(let i=0; i<names.length; i++){
        messages.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

let number =10;
function countDown(number){
    while (number> -1){
        console.log(number--)
    }
    return number;

}