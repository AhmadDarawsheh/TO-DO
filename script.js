const inputBox = document.getElementById("input-todo");
const list = document.getElementById("list");
var listItems = document.querySelectorAll("#list li");
var todoItems = [];

listItems.forEach((e) => {
  e.addEventListener("click", () => {
    var clickLi = todoItems.find((todo) => {
      return todo.desc === e.innerHTML;
    });
    console.log(clickLi);
  });
});

//Factory function used
const task = (desc) => {
  return {
    description: desc,
    checked: false,
  };
};

//object to control the added tasks 
var itemController = {
  add: () => {
    if (inputBox.value === "") {
      alert("You should add a task!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      list.appendChild(li);
      const todoTask = task(inputBox.value);
      todoItems.push(todoTask);

      let span = document.createElement("span");
      span.innerHTML = "\u00D7";
      li.appendChild(span);
    }
    inputBox.value = ""; // Clear the inputfield after adding and element;
  },

  checked: list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      var clickLi = todoItems.find((todo) => {
        return e.target.textContent.replace(/×/g, "") === todo.description;
      });
      if (!clickLi.checked) {
        clickLi.checked = true;
      } else {
        clickLi.checked = false;
      }

      console.log(todoItems);
    }
  }),

  delete: list.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      var clickLi = todoItems.find((todo) => {
        return (
          e.target.parentElement.textContent.replace(/×/g, "") ===
          todo.description
        );
      });
      console.log("Is removed from the array", clickLi);
      todoItems.pop(clickLi);
      console.log(this.tasks);
    }
  }),

  retrive: () => {
    console.log(todoItems);
  },
};

itemController.retrive();
