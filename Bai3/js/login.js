const inputPass = document.querySelector("#input-pass");
const inputName = document.querySelector("#input-name");
const eyePass = document.querySelector("#eye-pass");
const form = document.querySelector(".box-register");
const error = document.querySelector("#error");
let accountLocal = JSON.parse(localStorage.getItem("account")) || [];


function check(name,pass){
    let isValid = true;
    let checkAccount = accountLocal.find(account => (account.userName === name) && (account.password === pass));
    if(name.length === 0 || pass.length === 0){
        error.textContent = "Must not be left blank ⚠️";
        error.style.color = "red";
        isValid = false;
    }else if(checkAccount === undefined){
        error.textContent = "Incorrect account or password ⚠️";
        error.style.color = "red";
        isValid = false;
    };
    return isValid;
};

form.addEventListener("submit",function(e){
    e.preventDefault();
    let name = inputName.value.trim();
    let pass = inputPass.value.trim();
    if(check(name,pass)){
        window.location.replace("index.html");
    }
});



eyePass.addEventListener("click", function () {

    if (inputPass.type === "password") {
        inputPass.type = "text";
        eyePass.textContent = "🙈";
    } else {
        inputPass.type = "password";
        eyePass.textContent = "👁️";
    }

});

