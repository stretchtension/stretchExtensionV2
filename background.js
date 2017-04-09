

chrome.alarms.onAlarm.addListener(function( alarm ) {
  showNotification();
});


function showNotification(storedData) {

    // Now create the notification
    chrome.notifications.create('reminder', {
        type: 'basic',
        iconUrl: 'https://image.flaticon.com/icons/png/128/10/10699.png',
        title: 'TAKE A QUICK BREAK',
        message: 'Take a quick 1 minute break and stretch your arms!'
     }, function(notificationId) {});
  
}
