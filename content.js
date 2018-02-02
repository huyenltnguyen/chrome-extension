console.log('Chrome extension is running');

const gotMessage = (message, sender, sendResponse) => {
  if (message.txt === 'hello') {
    let paragraphs = document.getElementsByTagName('p');

    for (element of paragraphs) {
      element.style['background-color'] = '#77A7FF';
    }
  }
};

chrome.runtime.onMessage.addListener(gotMessage);