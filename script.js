let equipmentName = document.querySelector("#equipmentName");
let equipmentLocation = document.querySelector("#equipmentLocation");
let equipmentTag = document.querySelector("#equipmentTag");
let motorVoltage = document.querySelector("#motorVoltage");
let motorPhase = document.querySelector("#motorPhase");
let motorHP = document.querySelector("#motorHP");
let conductorMaterial = document.querySelector("#conductorMaterial");
let conductorLength = document.querySelector("#conductorLength");
let voltageDrop = document.querySelector("#voltageDrop");
let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener('click', () => {
    console.log(equipmentName);
    console.log(equipmentLocation);
    console.log(equipmentTag);
    console.log(motorVoltage);
    console.log(motorPhase);
    console.log(motorHP);
    console.log(conductorMaterial);
    console.log(conductorLength);
    console.log(voltageDrop);
})
