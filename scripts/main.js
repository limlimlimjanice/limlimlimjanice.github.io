// assign document h1 to a constant called my Heading
/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";*/

/*
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
  

  or use "addEventListener("click", () => {  alert("Ouch! Stop poking me!");" to represent an anonymous function
*/
 

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pic-1.png") {
    myImage.setAttribute("src", "images/pic-2.png");
  } else {
    myImage.setAttribute("src", "images/pic-1.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name:");
  if (!myName){
    setUserName();
  } else {
    localStorage.setItem("name",myName);
    myHeading.textContent = `Welcome noob ${myName}`;
}
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello noob ${storedName}`;
}

myButton.onclick =()=> {
  setUserName();
}