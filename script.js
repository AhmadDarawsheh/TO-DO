const inputBox = document.getElementById("input-todo");
const list = document.getElementById("list");
const listItems = document.querySelectorAll("#list li");
const dropdown = document.getElementById("dp");
const ddp = document.getElementById("mdd");
const selectedElement = document.getElementById("ps");

const appendTodoItem = (state, value, id) => {
  let li = document.createElement("li");
  li.innerHTML = value;
  li.setAttribute("id", id);
  console.log(li.id);
  list.appendChild(li);
  if (state == "high") {
    li.classList.toggle("high");
  }

  if (state == "medium") {
    li.classList.toggle("medium");
  }

  if (state == "low") {
    li.classList.toggle("low");
  }

  let span = document.createElement("span");
  span.innerHTML = "\u00D7";
  li.appendChild(span);

  inputBox.value = "";
};

class Todo {
  constructor(description) {
    this.description = description;
    this.checked = false;
    this.priority = "";
    this.id = 0;
  }
}

class TodoController {
  todoList = [];
  priorityState = selectedElement.value; // default value is "high"
  idCounter = 0;

  select = () => {
    selectedElement.addEventListener("change", () => {
      const selectedValue = selectedElement.value;
      this.priorityState = selectedValue;
    });
  };

  add = () => {
    if (inputBox.value === "") {
      alert("You should add a task!");
    } else {
      this.todoItem = new Todo(inputBox.value);
      this.todoItem.priority = this.priorityState;
      this.todoItem.id = this.idCounter++;
      appendTodoItem(
        this.todoItem.priority,
        this.todoItem.description,
        this.todoItem.id
      );
      this.todoList.push(this.todoItem);
      this.retrive();
    }
  };

  checked = () => {
    list.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        const clickLi = this.todoList.find((todo) => {
          return e.target.id == todo.id; // strict equal doesn't work because the id attribute is a string and the id property of the object is a number;
        });
        if (!clickLi.checked) {
          clickLi.checked = true;
        } else {
          clickLi.checked = false;
        }
        this.retrive();
      }
    });
  };

  delete = () => {
    list.addEventListener("click", (e) => {
      if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        const clickLi = this.todoList.findIndex((todo) => {
          return e.target.parentElement.id == todo.id;
        });
        this.todoList.splice(clickLi, 1);
        this.retrive();
      }
    });
  };

  retrive = () => {
    console.log(this.todoList);
  };
}

const render = () => {
  const controller = new TodoController();
  const addCLicked = document.getElementById("addB");
  addCLicked.addEventListener("click", () => {
    controller.add();
  });
  controller.checked();
  controller.delete();
  controller.select();
  controller.retrive();
};

render();
