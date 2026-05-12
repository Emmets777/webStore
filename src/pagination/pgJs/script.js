import init from "./initializeUsers.js";
import signIn from "./signIn.js";
import signUp from "./signUp.js";

init();

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

const passSignIn = document.getElementById("passwordSignIn");
const iconSignIn = document.getElementById("showPasswordSignIn");

iconSignIn.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-lock")) {
    passSignIn.type = "text";
    event.target.classList.remove("fa-lock");
    event.target.classList.add("fa-unlock");
  } else {
    passSignIn.type = "password";
    event.target.classList.remove("fa-unlock");
    event.target.classList.add("fa-lock");
  }
});

const passSignUp = document.getElementById("userPassword");
const iconSignUp = document.getElementById("showPasswordSignUp");

iconSignUp.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-lock")) {
    passSignUp.type = "text";
    event.target.classList.remove("fa-lock");
    event.target.classList.add("fa-unlock");
  } else {
    passSignUp.type = "password";
    event.target.classList.remove("fa-unlock");
    event.target.classList.add("fa-lock");
  }
});

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");

signInBtn.addEventListener("click", (event) => {
  event.preventDefault();
  signIn();
});
signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();
  signUp();
});
