document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === '1' && password === '1') {
        window.location.href = 'download.html';
    } else {
        message.textContent = 'Invalid username or password!';
    }
});
