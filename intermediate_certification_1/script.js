function registration() {
   const emailInput = this.document.forms['reg-form'].elements['email'];
   //const password = this.document.forms['reg-form'].elements['password'].value;
   //const passwordAgain = this.document.forms['reg-form'].elements['password-again'].value;


   if(isEmpty(emailInput.value)) {
    //вывести ошибку и сделать поле красным
    emailInput.classList.add()
   }
   
}



const isEmpty = (value) => !value;