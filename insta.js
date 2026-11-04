let width = window.innerWidth;
let emailinput = document.getElementsByClassName("emailinput")[0];
let email = document.getElementsByClassName("email")[0];
let Lab = document.getElementsByClassName("emaillabel")[0];
let win = document.getElementsByClassName("logwin")[0];
let passinput = document.getElementsByClassName("passinput")[0];
let pass = document.getElementsByClassName("pass")[0];
let passlabel = document.getElementsByClassName("passlabel")[0];
let loginbutton = document.getElementsByClassName("login")[0];






emailinput.addEventListener('click',(event)=>{
        Lab.style = "top:5px;font-size:14px;color:rgb(161, 161, 161);";
        email.style="position:relative;top:8px"
})


email.addEventListener("input", (event) => {
    
    if(event.target.value.length > 0){
        Lab.style = "top:5px;font-size:14px;color:rgb(161, 161, 161);"
        email.style="position:relative;top:8px"
    }
    else  {
        Lab.style = "top:19px;font-size:16px;color:rgb(161, 161, 161);";
        email.style="position:initial;"
    }

});

// let passinput = document.getElementsByClassName("passinput")[0];
// let pass = document.getElementsByClassName("pass")[0];
// let passlabel = document.getElementsByClassName("passlabel")[0];
// let loginbutton = document.getElementsByClassName("login")[0];



passinput.addEventListener('click',(event)=>{
        passlabel.style = "top:5px;font-size:15px;color:rgb(161, 161, 161);";
        pass.style="position:relative;top:8px"
})


pass.addEventListener("input", (event) => {
    
    if(event.target.value.length > 0){
        passlabel.style = "top:5px;font-size:15px;color:rgb(161, 161, 161);"
        pass.style = "position:relative;top:8px"
        togglePassword.style="display:initial"
    }
    else  {
        passlabel.style = "top:19px;font-size:16px;color:rgb(161, 161, 161);";
        pass.style="position:initial;"
        togglePassword.style="display:none"
    }

});

let login = document.querySelector("input.login");
login.style="opacity:30%;"

addEventListener("input", (event) => {
if(email.value.length && pass.value.length >= 3){
    login.style = "opacity:100%;cursor:pointer;"
}
else{
   login.style="opacity:30%;cursor:not-allowed;"
}

})





// 

setTimeout(() => {
    win.style="display:none;" 
},1500)



   const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('.pass');

togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Toggle the eye / eye-slash icon
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});






























































































if(width >= 320 && width <= 768) {
   



emailinput.addEventListener('click',(event)=>{
        Lab.style = "top:7px;font-size:1px;color:rgb(161, 161, 161);";
    email.style = "position:relative;top:8px;height:30px;";
    emailinput.style = "height:60px;";
})


email.addEventListener("input", (event) => {
    
    if(event.target.value.length > 0){
        Lab.style = "top:8px;font-size:2px;color:rgb(161, 161, 161);"
        email.style="position:relative;top:8px"
        emailinput.style="height:60px;"
    }
    else  {
        Lab.style = "top:initial;font-size:14px;color:rgb(161, 161, 161);";
        email.style = "position:initial;"
        emailinput.style="height:54px;"
    }

});





passinput.addEventListener('click',(event)=>{
        passlabel.style = "top:7px;font-size:3px;color:rgb(161, 161, 161);";
    pass.style = "position:relative;top:4px"
    passinput.style="height:60px;"
})


pass.addEventListener("input", (event) => {
    
    if(event.target.value.length > 0){
        passlabel.style = "top:8px;font-size:3px;color:rgb(161, 161, 161);"
        pass.style = "position:relative;top:8px"
        togglePassword.style = "display:initial"
        passinput.style="height:60px;"
    }
    else  {
        passlabel.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
        pass.style="position:initial;"
        togglePassword.style = "display:none";
            passinput.style="height:54px;"
    }

});

let login = document.querySelector("input.login");
login.style="opacity:100%;"

// addEventListener("input", (event) => {
// if(email.value.length && pass.value.length >= 3){
//     login.style = "opacity:100%;cursor:pointer;"
// }
// else{
//    login.style="opacity:30%;cursor:not-allowed;"
// }

// })





// 

setTimeout(() => {
    win.style="display:none;" 
},1500)



   const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('.pass');

togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Toggle the eye / eye-slash icon
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

  
}
