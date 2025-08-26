document.getElementById('splitterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const numPeople = parseInt(document.getElementById('numPeople').value);

    if (numPeople > 0) {
        const splitAmount = (totalAmount / numPeople).toFixed(2);
        document.getElementById('result').innerText = `Each person should pay: $${splitAmount}`;
    } else {
        document.getElementById('result').innerText = 'Number of people must be greater than zero.';
    }
});

// Initialize AOS
AOS.init();
