/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")

const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

convertBtn.addEventListener("click", function () {
    let userValue = input.value
    lengthOutput.textContent = convertLength(userValue)
    volumeOutput.textContent = convertVolume(userValue)
    massOutput.textContent = convertMass(userValue)
})

function convertLength(val) {
    let metresToFeet = (parseInt(val) * 3.281).toFixed(3)
    let feetToMetres = (parseInt(val) * 0.3048).toFixed(3)
    return `${val} metres = ${metresToFeet} feet | ${val} feet = ${feetToMetres} metres`
}

function convertVolume(val) {
    let litresToGallons = (parseInt(val) * 0.264).toFixed(3)
    let gallonsToLitres = (parseInt(val) * 3.78541).toFixed(3)
    return `${val} litres = ${litresToGallons} gallons | ${val} gallons = ${gallonsToLitres} litres`
}

function convertMass(val) {
    let kilogramsToPounds = (parseInt(val) * 2.204).toFixed(3)
    let poundsToKilograms = (parseInt(val) * 0.454).toFixed(3)
    return `${val} kilograms = ${kilogramsToPounds} pounds | ${val} pounds = ${poundsToKilograms} kilograms`
}