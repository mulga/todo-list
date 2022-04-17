let userInput = document.querySelector("#userInput");
let addToDo = document.querySelector("#addToDo");
let deleteItem = document.querySelector("#delete");
let listGroup = document.querySelector("#listGroup");

function addItem() {
  if (userInput.value != "") {
    let listItem = document.createElement("div");
    let listLeft = document.createElement("div");
    let newInput = document.createElement("input");

    newInput.type = "checkbox";

    let newText = document.createElement("p");

    let newButton = document.createElement("button");
    newButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
    //
    listGroup.appendChild(listItem);
    listItem.appendChild(listLeft);
    listLeft.appendChild(newInput);
    listLeft.appendChild(newText);
    listItem.appendChild(newButton);

    //
    listItem.classList.add("list-item");
    listLeft.classList.add("list-left");
    newButton.classList.add("btn-delete");
    newText.classList.add("new-text");

    newText.innerHTML = userInput.value;
    userInput.value = "";

    // done

    var tick = document.querySelector("#listGroup");
    tick.addEventListener("click", itsDone);

    function itsDone() {
      if (newInput.checked == true) {
        listItem.classList.add("done");
      } else if (newInput.checked == false) {
        listItem.classList.remove("done");
      }
    }
    // Delete

    newButton.addEventListener("click", function () {
      listItem.remove();
    });
  }
}
