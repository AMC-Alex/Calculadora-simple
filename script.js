// DOM

const inputOne = document.querySelector("#numOne");
const inputTwo = document.querySelector("#numTwo");

const operations = document.querySelector(".operations");

const result = document.querySelector(".result");

const clear = document.getElementById("btnClear");

// Lógica

function mathOperation() {
  // Validar inputs vacíos
  if (inputOne.value.trim() === "" || inputTwo.value.trim() === "") {
    return {
      error: "Debes introducir ambos números.",
    };
  }

  const nm1 = Number(inputOne.value);
  const nm2 = Number(inputTwo.value);

  // Validar división entre 0
  if (nm2 === 0) {
    return {
      error: "No se puede dividir entre 0.",
      suma: nm1 + nm2,
      resta: nm1 - nm2,
      multiplicacion: nm1 * nm2,
      division: null,
    };
  }

  return {
    suma: nm1 + nm2,
    resta: nm1 - nm2,
    multiplicacion: nm1 * nm2,
    division: nm1 / nm2,
  };
}

// Mostrar resultado

function showResult(operation) {
  const resultOperation = mathOperation();

  // Comprobar si ocurrió un error
  if (resultOperation.error) {
    result.textContent = resultOperation.error;
    return;
  }

  result.textContent = resultOperation[operation];
}

// Delegación de eventos

operations.addEventListener("click", (event) => {
  const button = event.target;

  if (!button.dataset.operation) {
    return;
  }

  showResult(button.dataset.operation);
});

// Reset

clear.addEventListener("click", () => {
  inputOne.value = "";
  inputTwo.value = "";
  result.textContent = "";
});

