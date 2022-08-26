let shoppingItems = ["milk", "eggs", "bread"]

function updateItems() {
    const listElement = document.getElementById("shopping-list-items")
    listElement.innerHTML = "";
    shoppingItems.forEach((item) => {
        console.log(item)
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement)
        
    })
}

updateItems();


function addItem() {
    //getting value
    const item = document.getElementById("new-item-text").value;
    shoppingItems.push(item)
    console.log(shoppingItems)
    updateItems();
    //reset value to empty string
    item = document.getElementById("new-item-text").value = "";}

function clearItems() {
    shoppingItems.length = 0;
    updateItems()
}



