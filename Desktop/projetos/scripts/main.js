//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

var myImage = document.querySelector('#imagem');
//console.log(myImage);
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../img/icon.jpg') {
      myImage.setAttribute('src','../img/chrome.jpg');
    } else {
      myImage.setAttribute('src','../img/icon.jpg');
    }
}

let myButton = document.querySelector('button');
console.log(myButton);
let myHeading = document.querySelector('h1')
console.log(myHeading);

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }

  //setUserName();
console.log('funcionei');