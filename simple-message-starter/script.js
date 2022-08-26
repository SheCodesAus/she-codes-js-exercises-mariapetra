window.onload = function load() {
 const speechBubbleElement = document.createElement("div");
 speechBubbleElement.classList.add("speech-bubble");

 const messageBox = document.createElement("p");
 messageBox.innerText = "...";
 messageBox.id = "message-box"

 const nameElement = document.createElement("p");
 nameElement.innerText = "...";
 nameElement.id= "message-box"

 speechBubbleElement.appendChild(messageBox, nameElement);

 const outputElement = document.getElementById("output");
 outputElement.appendChild(speechBubbleElement);

 
};

function showMessage() {
    let message = document.getElementById("message-text").value;
    const messageBox = document.getElementById("message-box");
    messageBox.innerText = message;
   
}