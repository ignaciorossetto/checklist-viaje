const checkBoxContainer = document.getElementById("tableContainer");
const items = ["DNI", "PASAPORTE", "CARNET DE CONDUCIR"];
const items1 = ["PLATA", "TARJETAS", "EQUIPAJE"];
const items2 = [
  "CARNET DE VACUNACION",
  "CERTIFICADO VACUNA FIEBRE AMARILLA",
  "BARBIJO",
  "CONTRATAR ASSISTCARD",
];
const items3 = ["DESCARGAR APP PeduliLindungi"];
const items4 = ["OTROS UTILES"];
const items5 = [
  "AURICULARES",
  "DESCARGAR MUSICA",
  "DESCARGAR SERIES",
  "LIBRO",
  "ANTEOJOS",
  "MEDICAMENTOS",
  "CHEQUEAR NECESER",
  "OJOTAS",
  "ESCANEAR DOCUMENTOS",
  "IMPRIMIR PASAJES",
  "IMPRIMIR ASSISTCARD",
];

const displayCheckBoxes = () => {
  checkBoxContainer.innerHTML = "";
  items.forEach((item) => {
    checkBoxContainer.innerHTML += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="${item}" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          ${item}
        </label>
        </div>`;
  });
  checkBoxContainer.innerHTML += `<hr class='Hr'/>`;
  items1.forEach((item) => {
    checkBoxContainer.innerHTML += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="${item}" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          ${item}
        </label>
        </div>`;
  });
  checkBoxContainer.innerHTML += `<hr class='Hr'/>`;
  items2.forEach((item) => {
    checkBoxContainer.innerHTML += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="${item}" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          ${item}
        </label>
        </div>`;
  });
  checkBoxContainer.innerHTML += `<hr class='Hr'/>`;
  items3.forEach((item) => {
    checkBoxContainer.innerHTML += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="${item}" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          ${item}
        </label>
        </div>`;
  });
  checkBoxContainer.innerHTML += `<hr class='Hr'/>`;
  items4.forEach((item) => {
    checkBoxContainer.innerHTML += `
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          ${item}
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${item}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" id='modalBody'>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
  });

  items5.forEach((item) => {
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML += `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="${item}" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          ${item}
        </label>
        </div>`;
  });
};

let checkItems = document.getElementsByClassName("form-check-input");

displayCheckBoxes();

for (let index = 0; index < checkItems.length; index++) {
  const element = checkItems[index];
  element.addEventListener("change", (e) => {
    console.log(e.target.checked);
    console.log(e.target.value);
    localStorage.setItem(`${e.target.value}`, JSON.stringify(e.target.checked));
    if (e.target.checked === true) {
      checkItems[index].parentNode.style.backgroundColor = "#5ee35eb3";
      checkItems[index].parentNode.style.borderRadius = "30px";
      checkItems[index].parentNode.style.width = "fit-content";
      checkItems[index].parentNode.style.paddingRight = "15px";
    } else if (e.target.checked === false) {
      checkItems[index].parentNode.style.backgroundColor = "transparent";
    }
  });
}

for (let index = 0; index < localStorage.length; index++) {
  const element = localStorage.key(index);
  for (let index = 0; index < checkItems.length; index++) {
    if (checkItems[index].value === element) {
      console.log(JSON.parse(localStorage.getItem(element)));
      checkItems[index].checked = JSON.parse(localStorage.getItem(element));
      if (checkItems[index].checked === true) {
        checkItems[index].parentNode.style.backgroundColor = "#5ee35eb3";
        checkItems[index].parentNode.style.borderRadius = "30px";
        checkItems[index].parentNode.style.width = "fit-content";
        checkItems[index].parentNode.style.paddingRight = "15px";
      } else {
        checkItems[index].parentNode.style.backgroundColor = "none";
      }
    }
  }
  // obj.checked = JSON.parse(sessionStorage.getItem(element))
}
