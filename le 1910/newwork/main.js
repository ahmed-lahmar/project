function item(itemName) {
    function createDiv(itemName) {
      //create input
      var input = document.createElement("input"); // to create and <input />
      input.value = itemName;
      input.disabled = true;
      input.type = "text";
      input.classList.add("item_input"); // create class Exp <input class="item_input"/>
  
      // create a div with classname item
      var itemBox = document.createElement("div");
      itemBox.classList.add("item");
  
      // create a edit button
      var editButton = document.createElement("button"); // create a <button>
      editButton.innerHTML = "EDIT";
      editButton.classList.add("editButton");
  
      // create a remove button
      var removeButton = document.createElement("button"); // create a <button>
      removeButton.innerHTML = "REMOVE";
      removeButton.classList.add("removeButton");
  
      // make input and the 2 other button inside the item box
      container.appendChild(itemBox);
      itemBox.appendChild(input);
      itemBox.appendChild(editButton);
      itemBox.appendChild(removeButton);
  
      editButton.addEventListener("click", () => edit(input)); // call edit function when u click on edit button
      removeButton.addEventListener("click", () => remove(itemBox)); // call remove function when u click on remove button
    }
  
    function edit(input) {
      input.disabled = !input.disabled;
    }
  
    function remove(itemBox) {
      container.removeChild(itemBox);
    }
  
    createDiv(itemName);
  }
  
  function check() {
    if (input.value !== "") {
      new item(input.value);
      input.value = "";
    }
  }