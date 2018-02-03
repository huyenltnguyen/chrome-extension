let $h1 = document.getElementsByTagName('h1')[0];
let count = 0;
setInterval(function() {
  count++;
  $h1.innerHTML = count;
}, 1000);
