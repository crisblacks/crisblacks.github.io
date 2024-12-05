document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const passwordInput = document.getElementById('password').value.trim();
    const resultMessage = document.getElementById('resultMessage');

    if (passwordInput.toLowerCase() === 'ketchup') {
        resultMessage.classList.remove('hidden');
    } else {
        alert('Password errata! Riprova.');
    }
});
