// public/contentScript.js
const container = document.createElement('div');
container.id = 'draggable-overlay-container';
document.body.appendChild(container);

const script = document.createElement('script');
script.src = chrome.runtime.getURL('draggableOverlayBundle.js');
script.type = 'module';
document.body.appendChild(script);
