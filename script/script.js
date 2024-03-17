const tabLogin = document.querySelector('#tab-login');
const tabRegister = document.querySelector('#tab-register');

const login = document.querySelector('#login-form');
const register = document.querySelector('#register-form');

const form = document.querySelector('#account-access');
const loginVisible = document.querySelector('#login-visibility');
const registerVisible = document.querySelector('#register-visibility');

tabLogin.addEventListener('click', () => {
    // altera o botão tag
    tabLogin.className = 'active'
    tabRegister.className  = ''
    // altera a cor de fundo
    form.className = ''
    form.classList.add('login')
    // altera a visibilidade
    loginVisible.className = 'form-visibility-true'
    registerVisible.className = 'form-visibility-false'
})

tabRegister.addEventListener('click', () => {
    // altera o botão tag
    tabRegister.className  = 'active'
    tabLogin.className = ''
    // altera a cor de fundo
    form.className = ''
    form.classList.add('register')
    // altera a visibilidade
    registerVisible.className = 'form-visibility-true'
    loginVisible.className = 'form-visibility-false'
})

login.addEventListener('submit', (event) => {
    event.preventDefault()
    window.location.href = 'annotations.html'
})

register.addEventListener('submit', (event) => {
    event.preventDefault()
    window.location.href = 'annotations.html'
})