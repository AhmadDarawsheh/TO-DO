const inputBox = document.getElementById("input-todo");
const list = document.getElementById("list");
const listItems = document.querySelectorAll("#list li");
const dropdown = document.getElementById("dp");
var todoItems = [];

let red = false;
let orange = false;
let yellow = false;
let choosen = false;

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
    } else if (choosen && red) {         /////////////////////////////////////////////////////// High priority
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      list.appendChild(li);
      li.classList.toggle("high");
      const todoTask = task(inputBox.value);
      todoItems.push(todoTask);

      let span = document.createElement("span");
      span.innerHTML = "\u00D7";
      li.appendChild(span);
      choosen = false;
      red = false;



    } else if (choosen && orange) {       /////////////////////////////////////////////////////// Medium priority
      console.log("Hi from orange");
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      li.classList.toggle("medium");
      list.appendChild(li);
      const todoTask = task(inputBox.value);
      todoItems.push(todoTask);

      let span = document.createElement("span");
      span.innerHTML = "\u00D7";
      li.appendChild(span);
      choosen = false;
      orange = false;




    } else if (choosen && yellow) {         /////////////////////////////////////////////////////// Low priority
      console.log("Hi from orange");
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      li.classList.toggle("low");
      list.appendChild(li);
      const todoTask = task(inputBox.value);
      todoItems.push(todoTask);

      let span = document.createElement("span");
      span.innerHTML = "\u00D7";
      li.appendChild(span);
      choosen = false;
      yellow = false;



    }  else {
      alert("Please choose priority first.");
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
    }
  }),

  retrive: () => {
    console.log(todoItems);
  },
};

itemController.retrive();

dropdown.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    choosen = true;
    if (e.target.textContent == "High") {
      red = true;
      green = false;
      yellow = false;
    }

    if (e.target.textContent == "Medium") {
      red = false;
      orange = true;
      yellow = false;
      console.log("ORange")
    }

    if (e.target.textContent == "Low") {
      red = false;
      orange = false;
      yellow = true;
    }
    console.log(e.target.innerHTML);
    console.log(choosen);
    console.log("hh ppl");
  }
});
