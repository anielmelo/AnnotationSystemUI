const buttonLogin = document.querySelector('#tab-login');
const buttonRegister = document.querySelector('#tab-register');
const form = document.querySelector('#account-access');
const loginVisible = document.querySelector('#login-visibility');
const registerVisible = document.querySelector('#register-visibility');

buttonLogin.addEventListener('click', () => {
    // altera o botão tag
    buttonLogin.className = 'active'
    buttonRegister.className  = ''
    // altera a cor de fundo
    form.className = ''
    form.classList.add('login')
    // altera a visibilidade
    loginVisible.className = 'form-visibility-true'
    registerVisible.className = 'form-visibility-false'
})

buttonRegister.addEventListener('click', () => {
    // altera o botão tag
    buttonRegister.className  = 'active'
    buttonLogin.className = ''
    // altera a cor de fundo
    form.className = ''
    form.classList.add('register')
    // altera a visibilidade
    registerVisible.className = 'form-visibility-true'
    loginVisible.className = 'form-visibility-false'
})