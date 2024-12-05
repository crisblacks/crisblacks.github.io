document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const passwordInput = document.getElementById('password').value.trim();
    const resultMessage = document.getElementById('resultMessage');
    const form = document.getElementById('passwordForm');

    if (passwordInput.toLowerCase() === 'ketchup') {
        resultMessage.classList.remove('hidden');
        form.classList.add('hidden');
    } else {
        alert('Password errata! Riprova.');
    }
});
