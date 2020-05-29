const key = document.getElementById("key");
const keyCode = document.getElementById("keyCode");
const code = document.getElementById("code");
const keyCode1 = document.getElementById("keyCode1");

window.addEventListener("keyup", (e) => {
  console.log(e);
  key.innerHTML = " " + e.key;
  keyCode.innerHTML = " " + e.keyCode;
  keyCode1.innerHTML = " " + e.keyCode;
  code.innerHTML = " " + e.code;
});
