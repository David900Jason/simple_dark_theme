const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nemo nam amet pariatur ut iste officiis temporibus. Beatae, impedit quisquam.";
const typeElement = document.querySelector("#landing .text p");
let count = 0;

let typer = setInterval(typeWriter, 50, text);

function typeWriter(t) {
  typeElement.innerHTML += t[count];
  count++;
  if (count == text.length) {
    clearInterval(typer);
  }
}

const darkButton = document.querySelector(".toggle-button");

darkButton.addEventListener("click", () => {
  darkButton.classList.toggle("dark-theme");
  if (darkButton.classList.contains("dark-theme")) {
    document.body.setAttribute("style", "--clr-primary: #fff; --clr-accent: #000");
  } else {
    document.body.setAttribute("style", "--clr-primary: #000; --clr-accent: #fff");
  }
});

setInterval(() => {
  darkButton.click();
}, 5000);

let years = document.querySelector("footer .copyright span");

window.addEventListener("load", () => {
  let date = new Date().getFullYear();
  years.innerHTML = `${date}`;

});
