// https://www.omnicalculator.com/physics/emc2

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const energyRadio = document.getElementById('energyRadio');
const massRadio = document.getElementById('massRadio');

let energy;
let mass = v;
const lightSpeed = 299792458;

// labels of the inpust
const variable = document.getElementById('variable');

energyRadio.addEventListener('click', function() {
  variable.textContent = 'Mass (kg)';
  mass = v;
});

massRadio.addEventListener('click', function() {
  variable.textContent = 'Energy (Mj)';
  energy = v;
});


btn.addEventListener('click', function() {
  
  if(energyRadio.checked)
    result.textContent = `Energy = ${computeEnergy().toFixed(2)} Mj`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)} kg`;
})

// calculation

function computeEnergy() {
  return (Number(mass.value) / 1000000) * Math.pow(lightSpeed, 2);
}

function computeMass() {
  return (Number(energy.value) * 1000000) / Math.pow(lightSpeed, 2);
}