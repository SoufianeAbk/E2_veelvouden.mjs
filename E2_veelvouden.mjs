import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let start = parseFloat(await userInput.question('Met getal beginnen we? '));
let end = parseFloat(await userInput.question('Met getal eindigen we? '));
let deler1 = parseFloat(await userInput.question('Wat is het eerste getal waarop we testen? '));
let deler2 = parseFloat(await userInput.question('Wat is het tweede getal waarop we testen? '));

while ((start <= end)){
    if ((!(start == 0)) && ((!(start % deler1)) && (!(start % deler2)))){
        console.log(start)
        start++
    }else {
        start++
    }

}
process.exit()