const inputName = document.querySelector("#input-name");
const inputPass = document.querySelector("#input-pass");
const inputConfirmPass = document.querySelector("#input-confirmPass");
const form = document.querySelector(".box-register");
let accountLocal = JSON.parse(localStorage.getItem("account")) || [];


form.addEventListener("submit",function(e){
    e.preventDefault();
    const name = inputName.value.trim();
    const pass = inputPass.value.trim();
    const confirmPass = inputConfirmPass.value.trim();
    accountLocal.push({
        userID : Date.now(),
        userName : name,
        password : pass
    });
    localStorage.setItem("account",JSON.stringify(accountLocal));
});