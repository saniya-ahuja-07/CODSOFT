const btns = document.querySelectorAll('button');
const display = document.querySelector('#display');

let firstVal = "";
let secondVal = "";
let operator = "";
let resultShown = false;

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let value = e.target.textContent;

    // CLEAR
    if (value === "C") {
      display.value = "";
      firstVal = "";
      secondVal = "";
      operator = "";
      resultShown = false;
      return;
    }

    // OPERATOR
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (firstVal === "") return;
      operator = value;
      display.value += value;
      resultShown = false;
      return;
    }

    // EQUALS
    if (value === "=") {
      if (firstVal === "" || operator === "" || secondVal === "") return;

      let result;

      if (operator === "+") {
        result = Number(firstVal) + Number(secondVal);
      } else if (operator === "-") {
        result = Number(firstVal) - Number(secondVal);
      } else if (operator === "*") {
        result = Number(firstVal) * Number(secondVal);
      } else if (operator === "/") {
        result = Number(firstVal) / Number(secondVal);
      }

      display.value = result;
      firstVal = result;
      secondVal = "";
      operator = "";
      resultShown = true;
      return;
    }

    // NUMBER
    if (resultShown) {
      display.value = "";
      firstVal = "";
      resultShown = false;
    }

    display.value += value;

    if (operator === "") {
      firstVal += value;
    } else {
      secondVal += value;
    }
  });
});








































// const display = document.getElementById("display");
// const btns = document.querySelectorAll("button");

// let firstValue = "";
// let secondValue = "";
// let operator = "";
// let resultShown = false;

// btns.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     const value = e.target.textContent;

//     // CLEAR
//     if (value === "C") {
//       display.value = "";
//       firstValue = "";
//       secondValue = "";
//       operator = "";
//       resultShown = false;
//       return;
//     }

//     // OPERATOR
//     if (value === "+" || value === "-" || value === "*" || value === "/") {
//       if (firstValue === "") return;
//       operator = value;
//       display.value += value;
//       resultShown = false;
//       return;
//     }

//     // EQUALS
//     if (value === "=") {
//       if (firstValue === "" || secondValue === "" || operator === "") return;

//       let result;

//       if (operator === "+") {
//         result = Number(firstValue) + Number(secondValue);
//       } else if (operator === "-") {
//         result = Number(firstValue) - Number(secondValue);
//       } else if (operator === "*") {
//         result = Number(firstValue) * Number(secondValue);
//       } else if (operator === "/") {
//         result = Number(firstValue) / Number(secondValue);
//       }

//       display.value = result;
//       firstValue = result;
//       secondValue = "";
//       operator = "";
//       resultShown = true;
//       return;
//     }

//     // NUMBER
//     if (resultShown) {
//       display.value = "";
//       firstValue = "";
//       resultShown = false;
//     }

//     display.value += value;

//     if (operator === "") {
//       firstValue += value;
//     } else {
//       secondValue += value;
//     }
//   });
// });
