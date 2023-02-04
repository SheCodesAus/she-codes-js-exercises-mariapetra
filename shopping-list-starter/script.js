let shoppingItems = [
    //set array for shopping list and due date
    //with 2 objects - name and dueDate
    { name: "milk", dueDate: "01/01/2023" },
    { name: "eggs", dueDate: "02/01/2023" },
    { name: "bread", dueDate: "03/01/2023" }
];

//gets the shopping-list-iyems input from the HTML and sets it to a list
const listElement = document.getElementById("shopping-list-items");

function updateItems() {
    // sets innerHTML to empty string
    listElement.innerHTML = "";
    //iterate through the shoppingItems 
    shoppingItems.forEach((item) => {
        //create a list element (note that a ul has been added in the HTML and it will sit under this)
        let itemElement = document.createElement("li");
        //set the inner text by accessing the shopping list item name and dueDate
        itemElement.innerText = `${item.name} - Due: ${item.dueDate}`;
        //append these to the itemElement
        listElement.appendChild(itemElement);
    });
}
//call updateItems function to update your shopping list
updateItems();

//add new items to your shopping list
function addItem() {
    //getting values by accessing the ID in the input in HTML
    const item = document.getElementById("new-item-text").value;
    const dueDate = document.getElementById("due-date").value;
    //push values to the shoppingItems
    shoppingItems.push({ name: item, dueDate: dueDate });
    //call function to updateItems
    updateItems();
    //reset values of the item and dueDate input to empty string
    // note I have included this as one line as JS is read top to bottom
    // and only one statement would work if they were set seperately
    document.getElementById("new-item-text").value = document.getElementById("due-date").value = "";
}

//clears the shopping list by setting the length of the shoppingItems to 0 
function clearItems() {
    shoppingItems.length = 0;
    //call your updateItems function
    updateItems();
}
