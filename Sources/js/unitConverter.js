const mainInputEl = document.getElementById('main-input');
const speedEl = document.getElementById('speed-el');
const lengthEl = document.getElementById('length-el');

console.log(mainInputEl);
if (mainInputEl) {
    mainInputEl.addEventListener('input', updateValues, false);
  }

function updateValues(e) {
  let inputedValue = e.target.value;
  
  let calcMsValue = ((inputedValue * 1000) / 3600).toFixed(2);
  let calcKmhValue = (inputedValue * 3.6).toFixed(2);
  let speedCalcResult = `${inputedValue} km/h = ${calcMsValue} m/s | ${inputedValue} m/s = ${calcKmhValue} km/h`;
  speedEl.textContent = speedCalcResult;

  let calcKmValue = (inputedValue * 1.609).toFixed(2);
  let calcMilValue = (inputedValue / 1.609).toFixed(2);
  lengthCalcResult = `${inputedValue} miles = ${calcKmValue} kilometers | ${inputedValue} kilometers = ${calcMilValue} miles`;
  lengthEl.textContent = lengthCalcResult;
}

function validate(evt) {
  var theEvent = evt || window.event;

  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}