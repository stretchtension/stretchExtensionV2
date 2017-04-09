// // Copyright (c) 2012 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.

// // Global variables only exist for the life of the page, so they get reset
// // each time the page is unloaded.

// function sendMessage() {
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     lastTabId = tabs[0].id;
//     chrome.tabs.sendMessage(lastTabId, "Background page started.");
//   });
// }

// sendMessage();
// chrome.browserAction.setBadgeText({text: "ON"});
// console.log("Loaded.");

// /*
// chrome.runtime.onInstalled.addListener(function() {
//   console.log("Installed.");

//   // localStorage is persisted, so it's a good place to keep state that you
//   // need to persist across page reloads.
//   localStorage.counter = 1;

//   // Register a webRequest rule to redirect bing to google.
//   var wr = chrome.declarativeWebRequest;
//   chrome.declarativeWebRequest.onRequest.addRules([{
//     id: "0",
//     conditions: [new wr.RequestMatcher({url: {hostSuffix: "bing.com"}})],
//     actions: [new wr.RedirectRequest({redirectUrl: "http://google.com"})]
//   }]);
// });

// chrome.bookmarks.onRemoved.addListener(function(id, info) {
//   alert("I never liked that site anyway.");
// });*/

// chrome.browserAction.onClicked.addListener(function() {
//   // The event page will unload after handling this event (assuming nothing
//   // else is keeping it awake). The content script will become the main way to
//   // interact with us.
//   chrome.tabs.create({url: "http://google.com"}, function(tab) {
//     chrome.tabs.executeScript(tab.id, {file: "content.js"}, function() {
//       // Note: we also sent a message above, upon loading the event page,
//       // but the content script will not be loaded at that point, so we send
//       // another here.
//       sendMessage();
//     });
//   });
// });
// /*
// chrome.commands.onCommand.addListener(function(command) {
//   chrome.tabs.create({url: "http://www.google.com/"});
// });*/

// chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
//   if (msg.setAlarm) {
//     // For testing only.  delayInMinutes will be rounded up to at least 1 in a
//     // packed or released extension.
//     chrome.alarms.create({delayInMinutes: 0.05});
//   } 
//   // If we don't return anything, the message channel will close, regardless
//   // of whether we called sendResponse.
// });

// chrome.alarms.onAlarm.addListener(function() {
      
//     alert("Time's up!");
//     chrome.alarms.create({delayInMinutes: 0.05});

// });

// chrome.runtime.onSuspend.addListener(function() {
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     // After the unload event listener runs, the page will unload, so any
//     // asynchronous callbacks will not fire.
//   });
//   chrome.browserAction.setBadgeText({text: ""});
//   chrome.tabs.sendMessage(lastTabId, "Background page unloaded.");
// });

chrome.alarms.onAlarm.addListener(function( alarm ) {
  //console.log("Got an alarm!", alarm);
  showNotification();
});
/*
function launch() {
  chrome.app.window.create('popup.html', {
    id: 'main',
    bounds: { width: 620, height: 500 }
  });
}*/

function showNotification(storedData) {

    // Now create the notification
    chrome.notifications.create('reminder', {
        type: 'basic',
        iconUrl: 'https://image.flaticon.com/icons/png/128/10/10699.png',
        title: 'TAKE A BREAK',
        message: 'Take a break and stretch your arms!'
     }, function(notificationId) {});
  
}

chrome.app.runtime.onLaunched.addListener(launch);

chrome.notifications.onClicked.addListener(function() {
  launch();
}); 
