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

const addTodoItem = (description) => {
  var todoItem = {
    desc: description,
    checked: false,
  };
  //   console.log(todoItem);
  todoItems.push(todoItem);
  console.log(todoItems);
};

// const addTask = () => {
//   if (inputBox.value === "") {
//     alert("You should add a task!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     list.appendChild(li);
//     addTodoItem(inputBox.value);

//     let span = document.createElement("span");
//     span.innerHTML = "\u00D7";
//     li.appendChild(span);
//   }
//   inputBox.value = ""; // Clear the inputfield after adding and element;
// };

// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("checked");
//   } else if (e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();
//   }
// });

// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();
//   }
// });

// console.log(todoItems);

var itemController = {
  add: () => {
    if (inputBox.value === "") {
      alert("You should add a task!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      list.appendChild(li);
      addTodoItem(inputBox.value);

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
        return e.target.textContent.replace(/×/g, "") === todo.desc;
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
          e.target.parentElement.textContent.replace(/×/g, "") === todo.desc
        );
      });
      console.log("Is removed from the array", clickLi);
      todoItems.pop(clickLi);
      console.log(todoItems);
    }
  }),
};
