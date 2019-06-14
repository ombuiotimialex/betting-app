function login() {

    var userNumber = document.getElementById("phoneNumber").value;
    var pin = document.getElementById("pin").value;

    if (userNumber === '+254702800664' && pin === '1664') {
        window.location.href = "/betting%20app/html/main.html";
    } else {
        alert("Invalid login credentials. ");
    }
}

function updateContent(selectedContainer) {
    let placeBetContainer = document.getElementById('placeBetContainer');
    let betHistoryContainer = document.getElementById('betHistoryContainer');
    let paymentsContainer = document.getElementById('paymentsContainer');

    if (selectedContainer === 'placeBetContainer') {
        placeBetContainer.classList.add('shown');
        placeBetContainer.classList.remove('hidden');

        betHistoryContainer.classList.add('hidden');
        betHistoryContainer.classList.remove('shown');

        paymentsContainer.classList.add('hidden');
        paymentsContainer.classList.remove('shown');
    } else if (selectedContainer === 'betHistoryContainer') {
        placeBetContainer.classList.add('hidden');
        placeBetContainer.classList.remove('shown');

        betHistoryContainer.classList.add('shown');
        betHistoryContainer.classList.remove('hidden');

        paymentsContainer.classList.add('hidden');
        paymentsContainer.classList.remove('shown');
    } else if (selectedContainer === 'paymentsContainer') {
        placeBetContainer.classList.add('hidden');
        placeBetContainer.classList.remove('shown');

        betHistoryContainer.classList.add('hidden');
        betHistoryContainer.classList.remove('shown');

        paymentsContainer.classList.add('shown');
        paymentsContainer.classList.remove('hidden');
    }
}

function bigButton() {
    background.color;
    black;
}