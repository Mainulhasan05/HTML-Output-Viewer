const inputText=document.getElementById("inputText");
const outputBox=document.getElementById("output")
let text;
const renderHTML=()=>{
    text=inputText.value;
    outputBox.innerHTML=text;
}