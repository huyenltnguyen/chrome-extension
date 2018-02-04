let $userInput = document.querySelector('#userInput');

const changeText = () => {
  let params = {
    active: true,
    currentWindow: true
  };

  const gotTabs = (tabs) => {
    let message = {
      txt: $userInput.value
    };
    console.log(message.txt);
    chrome.tabs.sendMessage(tabs[0].id, message);
  };

  chrome.tabs.query(params, gotTabs);
};

$userInput.addEventListener('change', changeText);
