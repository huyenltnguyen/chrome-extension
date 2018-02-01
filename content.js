console.log('Chrome extension is running');

let paragraphs = document.getElementsByTagName('p');

for (element of paragraphs) {
  element.style['background-color'] = '#77A7FF';
}