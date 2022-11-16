function registration() {

   const emailTextError = document.getElementById('email-error');
   const passwordTextError = document.getElementById('password-error');
   const passwordAgainTextError = document.getElementById('password-again-error');

   const emailInput = document.forms['reg-form'].elements['email'];
   const passwordInput = document.forms['reg-form'].elements['password'];
   const passwordAgainInput = document.forms['reg-form'].elements['password-again'];

   //если email пустой

   if(isEmpty(emailInput.value)) {
      emailTextError.textContent = 'Поле обязательно для заполнения' 

      emailInput.classList.add('input-error1');
      emailTextError.classList.add('text-error--active')
   } else {
      emailInput.classList.remove('input-error1');
      emailTextError.classList.remove('text-error--active');

      

      //если email невалидный

   if(!validateEmail(emailInput.value)) {
      emailTextError.textContent = 'Email введен некорректно'

      emailInput.classList.add('input-error1');
      emailTextError.classList.add('text-error--active')
     } else {
      emailInput.classList.remove('input-error1');
      emailTextError.classList.remove('text-error--active')
     } 
   }

   if(isEmpty(passwordInput.value)) {

      passwordTextError.textContent = 'Поле обязательно для заполнения'
      passwordInput.classList.add('input-error2');
      passwordTextError.classList.add('text-error--active')
   } else {
      passwordInput.classList.remove('input-error2');
      passwordTextError.classList.remove('text-error--active')
   }

   if(isEmpty(passwordAgainInput.value)) {

      passwordAgainTextError.textContent = 'Поле обязательно для заполнения'
      passwordAgainInput.classList.add('input-error3');
      passwordAgainTextError.classList.add('text-error--active')
   } else {
      passwordAgainInput.classList.remove('input-error3');
      passwordAgainTextError.classList.remove('text-error--active')
   }

   if (passwordInput.value.length < 8 ) {
      passwordTextError.textContent = 'Пароль должен содержать не менее 8 символов'
      passwordInput.classList.add('input-error2');
      passwordAgainInput.classList.add('input-error3');
      passwordTextError.classList.add('text-error--active')
   } else {
      passwordInput.classList.remove('input-error2');
      passwordAgainInput.classList.remove('input-error3');
      passwordTextError.classList.remove('text-error--active')
   }

   if (passwordInput.value !== passwordAgainInput.value) {
      passwordTextError.textContent = 'Пароли не совпадают'
      passwordInput.classList.add('input-error2');
      passwordAgainInput.classList.add('input-error3');
      passwordAgainTextError.classList.add('text-error--active')
   } else {
      passwordInput.classList.remove('input-error2');
      passwordAgainInput.classList.remove('input-error3');
      passwordAgainTextError.classList.remove('text-error--active')
   }
   
}


const isEmpty = (value) => !value;
 
const validateEmail = (email) => {
       const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(String(email).toLowerCase());
         }


      