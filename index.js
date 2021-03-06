// CODE FOR W1TEMP PACKAGE

// Example Code

var W1Temp = require('w1temp');
 
// turn on gpio pin 25 as W1 power if you want to
W1Temp.setGpioPower(25);
 
// set gpio pin 8 to use as W1 data channel
// if is not set by instructions above (required root permissions)
W1Temp.setGpioData(8);
 
// print list of available sensors uids (ex.: [ '28-00000636a3e3' ])
W1Temp.getSensorsUids().then(function (sensorsUids) {
  console.log(sensorsUids);
});
 
// get instance of temperature sensor
W1Temp.getSensor('28-031683a0feff').then(function (sensor) {
 
  // print actual temperature
  var temp = sensor.getTemperature();
  console.log('Actual temp:', temp, '°C');
 
  // print actual temperature on changed
  sensor.on('change', function (temp) {
    console.log('Temp changed:', temp, '°C');
  });
 
});