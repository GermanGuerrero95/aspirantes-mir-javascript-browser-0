const form = document.querySelector(".form");
const taskListId = [];
let id = 1;
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const taskText = document.querySelector(".form__input");
  const taskList = document.querySelector("#list");
  const text = taskText.value;
  const li = document.createElement("li");
  const label = document.createElement("label");
  label.textContent = taskText.value;
  const itemCheckBox = document.createElement("input");
  itemCheckBox.setAttribute("type", "checkbox");
  itemCheckBox.classList.add("input-style");
  label.classList = "ul__item";
  li.appendChild(itemCheckBox);
  li.appendChild(label);
  taskList.appendChild(li);
  taskText.value = "";
  taskListId.id = id++;
  taskListId.title = text;
  taskListId.completed = false;
  console.log(taskListId);
  itemCheckBox.addEventListener("change", handleCheckTask);
}

function handleCheckTask(e) {
  e.preventDefault();
  const inputUp = e.target;

  const liItem = inputUp.nextElementSibling;

  if (inputUp.checked) {
    liItem.classList.add("is-completed");
    taskListId.completed = true;
  } else {
    liItem.classList.remove("is-completed");
    taskListId.completed = false;
  }

  console.log(taskListId);
}

const btnDelete = document.querySelector(".delete__btn");

btnDelete.addEventListener("click", handleDelete);

function handleDelete() {
  const itemsCompleted = document.querySelectorAll(".is-completed");

  itemsCompleted.forEach(function (item) {
    const input = item.previousElementSibling;
    input.remove();
    item.remove();
    item.classList.remove("ul__item");
  });

  /*Me toco hacer otro for para quitar la clase del border botton, cuando se agrega
  una task se agrega esa clase y esa linea se mantenía cuando borraba el task. Con el 
  for de abajo se quita esa clase. No supe como borrar esa clase con el forEach de arriba*/
  const boderBotton = document.querySelectorAll("input:checked");
  for (let i = 0; i < boderBotton.length; i++) {
    boderBotton[i].classList.remove("ul__item");
  }
}
