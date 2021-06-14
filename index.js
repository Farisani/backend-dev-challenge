const readline = require('readline');
const fs = require('fs');

var file = 'myFile.txt';
var linesCount = 0;
var rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});
rl.on('line', function (line) {
    linesCount++; // on each linebreak, add +1 to 'linesCount'
   
    //Searching for a semicolon in each and every line
    let semicolon = line.indexOf(";");
   
    //Getting the position of the first space
    let position_Of_First_Space = line.indexOf(" ");

    //Creating a new string with no space between let/const and the variable name
    let newLine = line.slice(position_Of_First_Space+1);

    //Getting the position of the Second space
    let position_Of_Second_Space = newLine.indexOf(" ");
  
    //Creating a new string and removing the first space
    let newLine2 = newLine.slice(position_Of_Second_Space+1);

    //Getting the position of the third space
    let position_Of_Third_Space = newLine2.indexOf(" ");
 

    if(position_Of_Second_Space < 1 || position_Of_Third_Space < 1 || semicolon < 1){
    
        if(semicolon < 1 && position_Of_Second_Space < 1){
            console.log("MyFile.txt"+" "+"line number:" + linesCount + " has no semi colon and space");
        } else if(semicolon < 1 && position_Of_Third_Space < 1){
            console.log("MyFile.txt"+" "+"line number:" + linesCount + " has no semi colon and space");
            console.log(position_Of_Third_Space + "position_Of_Third_Space")
        } else if(semicolon > 1 || position_Of_Third_Space < 1 || position_Of_Second_Space < 1){
            console.log("MyFile.txt"+" "+"line number:" + linesCount + " has no space");
        } else if(semicolon < 1 || position_Of_Third_Space > 1 && position_Of_Second_Space > 1){
            console.log("MyFile.txt"+" "+"line number:" + linesCount + " has no semi colon");
        }

      }

});