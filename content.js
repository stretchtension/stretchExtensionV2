
(function () {
  //'use strict';
   var alarmName = 'stretchTime';
   function checkAlarm(callback) {
     chrome.alarms.getAll(function(alarms) {
       var hasAlarm = alarms.some(function(a) {
         return a.name == alarmName;
       });
       var newLabel;
       if (hasAlarm) {
         newLabel = 'Stop Working';
       } else {
         newLabel = 'Start Working';
       }
       document.getElementById('toggleAlarm').innerText = newLabel;
       if (callback) callback(hasAlarm);
     })
   }
   function createAlarm() {
     chrome.alarms.create(alarmName, {
       delayInMinutes: 15, periodInMinutes: 16});
   }
   function cancelAlarm() {
     chrome.alarms.clear(alarmName);
   }
   function doToggleAlarm() {
     checkAlarm( function(hasAlarm) {
       if (hasAlarm) {
         cancelAlarm();
       } else {
         createAlarm();
       }
       checkAlarm();
     });
   }
  document.getElementById('toggleAlarm').addEventListener('click', doToggleAlarm);
  checkAlarm();
})();