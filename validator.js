const email_input_wrapper = document.querySelector('.input-elem');
const email_input = document.querySelector('.email-input'); 
const email_btn = document.querySelector('.email__btn');
const incorrect_elem = document.querySelector('.email-incorect-text')

email_input.addEventListener('click',()=>{
    email_input.placeholder = ''
})
email_btn.addEventListener('click',()=>{
    emailChecker()
})

function emailChecker(){
if (validator.isEmail(email_input.value)){ //validator-js
    email_input.classList.add("email-input-success");
    email_input.classList.remove("email-input")
    email_input.classList.remove("email-input-mistake");
    incorrect_elem.style.display = 'none';
}else{
    email_input.classList.add("email-input-mistake");
    email_input.classList.remove("email-input");
    email_input.classList.remove("email-input-success");
    incorrect_elem.style.display = 'block'

}

}