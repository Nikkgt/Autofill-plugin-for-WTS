document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fill').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          files: ['fill.js']
        });
      });
    });
  });
  