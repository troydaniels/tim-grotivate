// Called when the user clicks on Tim
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Loading some Tim Gro-tervation');
  chrome.tabs.executeScript({
     file: "src/inject.js"
  });
});

