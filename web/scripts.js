document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const message = document.getElementById('message');

            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if (username === storedUsername && password === storedPassword) {
                window.location.href = 'download.html';
            } else {
                message.textContent = 'Invalid username or password!';
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            const message = document.getElementById('regMessage');

            if (username && password) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                message.style.color = 'green';
                message.textContent = 'Registration successful! You can now login.';
            } else {
                message.textContent = 'Please fill in all fields!';
            }
        });
    }
});
