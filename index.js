const connvertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

connvertBtn.addEventListener("click", function(){
       let num = Number(inputEl.value)
    
       let length = `<h3>
                    Length (Meters/Feet)
                </h3>
                <p>
                     ${num} meter(s) = ${(num / meterToFeet).toFixed(3)} feet(s) | ${num} feet(s) = ${(num * meterToFeet).toFixed(3)} meter(s).
                    </p>`
    let volume = `<h3>
                    Volume (Liters/Gallons)
                </h3>
                <p>
                     ${num} liter(s) = ${(num / literToGallon).toFixed(3)} gallon(s) | ${num} gallon(s) = ${(num * meterToFeet).toFixed(3)} liter(s).
                  </p>`
    let mass = `<h3>
                    Mass (Kilogram/pounds)
                </h3>
                <p>
                     ${num} pound(s) = ${(num / kiloToPound).toFixed(3)} killogram(s) | ${num} kilogram(s) = ${(num * kiloToPound).toFixed(3)} pound(s).
                  </p>`

 lengthEl.innerHTML = length;
 volumeEl.innerHTML = volume;
 massEl.innerHTML = mass;
 inputEl.value = ''
})