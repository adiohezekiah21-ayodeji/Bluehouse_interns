const addButton = document.getElementById("addButton");

const itemInput = document.getElementById("itemInput");

const shoppingList = document.getElementById("shoppingList");

addButton.addEventListener("click", function () {

    const itemText = itemInput.value;

    if (itemText === "") {

        alert("Please enter an item.");

        return;
    }

    const li = document.createElement("li");

    const text = document.createElement("span");

    text.textContent = itemText;

    const actions = document.createElement("div");

    actions.classList.add("actions");

    const editButton = document.createElement("button");

    editButton.textContent = "Edit";

    const doneButton = document.createElement("button");

    doneButton.textContent = "Done";

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    actions.appendChild(editButton);

    actions.appendChild(doneButton);

    actions.appendChild(deleteButton);

    li.appendChild(text);

    li.appendChild(actions);

    shoppingList.appendChild(li);

    itemInput.value = "";

    editButton.addEventListener("click", function () {

        const newText = prompt(
            "Edit item:",
            text.textContent
        );

        if (newText !== null && newText !== "") {

            text.textContent = newText;
        }
    });

    doneButton.addEventListener("click", function () {

        text.classList.toggle("purchased");
    });

    deleteButton.addEventListener("click", function () {

        li.remove();
    });

});