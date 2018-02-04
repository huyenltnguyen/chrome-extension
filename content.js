console.log('Chrome extension is running');

const gotMessage = (message, sender, sendResponse) => {
  let paragraphs = document.getElementsByTagName('p');

  for (element of paragraphs) {
    element.innerHTML = message.txt;
  }
};

chrome.runtime.onMessage.addListener(gotMessage);