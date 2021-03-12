let mainNav = document.getElementById('js-menu');
let navContainer = document.getElementById('nav');
let navBarToggle = document.getElementById('js-navbar-toggle');
let APP_URL = 'http://localhost/awdd/SWP-CA2';

let registerElement = document.getElementsByClassName('register__element');

let sign_in = document.getElementById('sign_in');
let register = document.getElementById('register');
let form = document.getElementById("signin_register_form")

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    navContainer.classList.toggle('zeroShrink');
});


sign_in.addEventListener('click',function(){
    for (i = 0; i < registerElement.length; i++) {
        registerElement[i].classList.remove('visible');
        sign_in.classList.add('form_btn_active');
        register.classList.remove('form_btn_active');
        form.action = APP_URL + "/actions/login.php";
      } 
}); 


register.addEventListener('click',function(){
    for (i = 0; i < registerElement.length; i++) {
        registerElement[i].classList.add('visible');
        register.classList.add('form_btn_active');
        sign_in.classList.remove('form_btn_active');
        form.action = APP_URL + "/actions/register.php";
      } 

});  