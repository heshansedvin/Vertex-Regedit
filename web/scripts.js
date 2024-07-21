document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === '11'  && password === '1') {
        window.location.href = 'welcome.html';
    } else {
        message.textContent = 'Invalid username or password!';
    }
    if (username === 'dagi'  && password === '1') {
        window.location.href = 'welcome.html';
    } else {
        message.textContent = 'Invalid username or password!';
    }
    if (username === 'sikka'  && password === '1') {
        window.location.href = 'download.html';
    } else {
        message.textContent = 'Invalid username or password!';
    }
});
