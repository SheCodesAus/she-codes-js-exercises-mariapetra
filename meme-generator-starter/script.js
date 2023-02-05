function getImage() {
  const imageURL = document.getElementById("image-url").value;
  const imageBox = document.createElement('img');
  imageBox.id = 'meme-image';
  imageBox.src = imageURL;
  const wrapper = document.getElementById('meme-image-wrapper');
  wrapper.appendChild(imageBox);
  document.getElementById("meme-builder").style.display = "block";
}

function addTopText() {
  const topText = document.getElementById("top-text-input").value;
  document.getElementById("top-text").innerText = topText;
}

function addBottomText() {
  const bottomText = document.getElementById("bottom-text-input").value;
  document.getElementById("bottom-text").innerText = bottomText;
}