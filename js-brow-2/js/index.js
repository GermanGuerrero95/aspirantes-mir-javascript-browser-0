const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const taskText = document.querySelector(".form__input");
  const taskList = document.querySelector("#list");
  const text = taskText.value;
  const li = document.createElement("li");
  const itemCheckBox = document.createElement("input");
  itemCheckBox.setAttribute("type", "checkbox");
  li.textContent = text;
  li.classList.add("aca");
  taskList.appendChild(itemCheckBox);
  taskList.appendChild(li);
  itemCheckBox.addEventListener("change", handleCheckTask);
  taskText.value = "";
}

function handleCheckTask(e) {
  e.preventDefault();
  const inputUp = e.target;

  const liItem = inputUp.nextElementSibling;

  if (inputUp.checked) {
    liItem.classList.add("is-completed");
  } else {
    liItem.classList.remove("is-completed");
  }
}

const btnDelete = document.querySelector(".btndelete");

btnDelete.addEventListener("click", handleDelete);

function handleDelete() {}
