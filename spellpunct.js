//vars pulled from html
let onSubmitButton = document.getElementById("Enter");
let textInput = document.getElementById("inputField");
let outputArea = document.getElementById("Output");
let clearText = document.getElementById("Delete");

//variables
var textArray;
textArray = [];



//print the typed information 
//[call functions, create a paragraph, and log the final array]
//paragraph prints text with capitalization
onSubmitButton.addEventListener('click', function(){
        
        fillArray();
        addPeriod();
        newText();
        var paragraph = document.createElement('p')
        paragraph.innerText = finalTxt.charAt(0).toUpperCase() + finalTxt.substring(1).toLowerCase(); 
        outputArea.append(paragraph);       
        console.log(textArray);
        eraseText();
  
        
    });


//clear button
clearText.addEventListener('click', 
     function(){
        inputField.value = "";
        // outputArea.value = "";
})

//removes 'Enter text here'
textInput.addEventListener('click', function(){
        inputField.value = "";
      //  Output.value="";
})


//FUNCTIONS

//push text to array
function fillArray() {                
    inputvalue=document.getElementById("inputField").value;
    textArray.push(inputvalue);
    return textArray;
} 

//array into text, creates new var
function newText() {
    finalTxt = textArray.join('');
    return finalTxt;
 } 


//Check for ending punctuation. if none, add a period
function addPeriod() {  
  finalTxt = textArray.join(' ');
  punctTxt = finalTxt.slice(-1); 
      if (punctTxt==="." || punctTxt === "?" || punctTxt === "!") {
          return textArray;
      } else {
          textArray.push('.'); 
          return textArray;
  }
}  


//sets Array back to 0
function eraseText() {
  textArray.length=0;
  inputField.value = "";
}