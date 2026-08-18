const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");




loginForm.addEventListener("submit",function(event){
    event.preventDefault(); //ngăn hành vi mặc định của trình duyệt
    const email = emailInput.value;
    const password = passwordInput.value;   
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    if(!validate(password,message)){
        return;
    }
    if (email === `nguyenhuudat337@gmail.com` && password ==='Huudat0911@'){
        console.log(`Đăng nhập thành công`);
        message.textContent = "Đăng nhập thành công";
        message.classList.remove("error");
        message.classList.add("success");
        window.location.href = "home.html";
    }else{
        console.log(`Email hoặc mật khẩu không đúng`);
        message.textContent = "Đăng nhập không thành công";
        message.classList.remove("success");
        message.classList.add("error");
    }
});

window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
        window.location.reload();
    }
});

function validate(password,message){
    let check = true;
    if(password.length < 8){
        check = false;
        message.textContent = "Mật khẩu phải ít nhất 8 ký tự";
        message.classList.add("error");
    }
    return check;
}
