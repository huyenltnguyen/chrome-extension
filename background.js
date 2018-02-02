/*
Icon by Flaticon - https://www.freepik.com/free-icon/animal-paw-print_774725.htm
*/

console.log('background is running');

const buttonClicked = (tab) => {
  let msg = {
    txt: 'hello'
  }
  chrome.tabs.sendMessage(tab.id, msg);
}

chrome.browserAction.onClicked.addListener(buttonClicked);
