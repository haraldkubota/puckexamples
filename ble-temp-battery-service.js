// Adversise the temperature, send out every 30s

setInterval(function() {
  NRF.setAdvertising({
    0x1809 : [Math.round(E.getTemperature())],
  });
}, 30000);






// Have a service to show temperature and battery level
// This is only visible when you are connecting to the Puck

var currentTemperature=E.getTemperature().toFixed(2)*100;

NRF.setServices({
  0x1809 : { // Health Thermometer
    0x2A6E: {  // Temperature
      readable: true,
      value : [ currentTemperature % 256, currentTemperature / 256 ]
    }
  },
  0x180f : { // Battery Level
    0x2a19 : { // Percentage
      readable : true,
      value: [ Puck.getBatteryPercentage() ],
    }
  }
});


