window.onload = function load() {
    const speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");

    const messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box"

    const nameElement = document.createElement("p");
    nameElement.id = "name-box"

    speechBubbleElement.appendChild(messageBox);
    speechBubbleElement.appendChild(nameElement);

    const outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);

};

function showMessage() {
    const message = document.getElementById("message-text").value;
    const name = document.getElementById("username").value;
    const messageBox = document.getElementById("message-box");
    messageBox.innerText = `${message} - ${name}`;
}
