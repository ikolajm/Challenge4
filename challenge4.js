const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');
const button = document.querySelector('#button');

function submit() {
    if (username.value === "" || password.value === "" || confirm.value === "") {
        alert("Please make sure all fields are filled in");
    } else if (password.value !== confirm.value) {
        alert("Your passwords MUST match!");
    } else {
        button.disabled = true;
    }
}