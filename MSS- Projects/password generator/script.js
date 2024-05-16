const password = document.querySelector('#password');
const button = document.querySelector('button');

let characters = '012456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:"<>?-=[]\|;,./';
let passwordLength = 8;
let passwordValue = '';

const createPassword = () => {
    passwordValue = '';
    for(let i=0 ; i<passwordLength ; i++){
        let number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number,number + 1)
 }
 password.value = passwordValue;
}
button.addEventListener('click',createPassword);