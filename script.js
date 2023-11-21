"use strict";

// Selecting Elements
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const btnCalc = document.getElementById("btn--calc");
const result = document.querySelectorAll("result");
const resultBMI = document.getElementById("result-BMI");
const resultStatement = document.getElementById("result-statement");
const resetBtn = document.querySelector(".reset");

// Initialize values
let height, weight, BMI;

// RESET  Functionality
resetBtn.addEventListener("click", function () {
  height = 0;
  weight = 0;
  BMI = 0;

  document.querySelector(".result-section").classList.add("hidden");
  heightInput.value = "";
  weightInput.value = "";
});

// CALCULATE Functionality
btnCalc.addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".result-section").classList.remove("hidden");

  height = Number(heightInput.value);
  weight = Number(weightInput.value);

  if (height <= 0 || weight <= 0) {
    resultBMI.innerText = `Please enter valid height and weight values`;
    resultStatement.innerText = "";
    resultBMI.style.color = "red";
    return;
  }

  resultBMI.style.color = "black";
  BMI = (weight / ((height * height) / 10000)).toFixed(2);

  resultBMI.textContent = `Your BMI is ${BMI}`;

  if (BMI < 18.5) {
    resultStatement.innerText = `Your ${BMI} BMI falls within the underweight range`;
  } else if (BMI > 18.5 && BMI <= 24.9) {
    resultStatement.innerText = `Your ${BMI} BMI falls within the normal or healthy weight range`;
  } else if (BMI >= 25 && BMI <= 29.9) {
    resultStatement.innerText = `Your ${BMI} BMI falls within the overweight range`;
  } else {
    resultStatement.innerText = `Your ${BMI} BMI falls within the obese range`;
  }
});
