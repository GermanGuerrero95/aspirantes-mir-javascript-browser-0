// Obtener elementos del DOM
const form = document.querySelector("form");
const input = document.querySelector("input");
const section = document.querySelector("section");
const emailAdd = document.querySelector("#email");
// Manejar el evento de enviar el formulario

window.onload = iniciar;

function iniciar() {
  showName();
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Borrar";
  form.appendChild(btnDelete);
  btnDelete.id = "btn-delete";
  btnDelete.type = "button";
  const deleteBtn = document.querySelector("#btn-delete");
  deleteBtn.addEventListener("click", deleteName);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const datos = {};
  datos.name = input.value;
  datos.email = emailAdd.value;
  localStorage.setItem("info", JSON.stringify(datos));
  if (localStorage.info) {
    alert("datos guardados");
  } else {
    alert("No hay datos");
  }
  input.value = "";
  emailAdd.value = "";
});

// Función para mostrar el nombre guardado en localStorage
function showName() {
  if (!localStorage.getItem("info")) {
    alert("No hay datos almacenados");
  } else {
    const textContainerData = document.createElement("p");
    const objectInfo = JSON.parse(localStorage.getItem("info"));
    /*Esta es la manera más facíl que encontre. Utilce for in, utlice for of y casi no puedo, dejo
     comentando el for of que sí me funciono. Abajo esta la manera mas abreviada con la sintaxis del punto
     */

    textFinal = ` El nombre almacenado es ${objectInfo.name} y el Email es : ${objectInfo.email}`;

    // let textFinal = "";
    // for (const [key, value] of Object.entries(objectInfo)) {
    //   textFinal += `${key}:${value}`;
    // }

    textContainerData.textContent = textFinal;
    textContainerData.classList.add("text-decoration");
    section.appendChild(textContainerData);
  }
}

// Función para borrar el nombre guardado en localStorage

function deleteName() {
  const textContainer = document.querySelector("p");
  if (localStorage.info) {
    alert(`${localStorage.info} procede a borrarse`);
    localStorage.removeItem("info");
    textContainer.remove();
  } else {
    alert("No hay información para borrarse");
  }
}
