function login() {

    var userNumber = document.getElementById("phone number").value;
    var pin = document.getElementById("pin").value;
    if (userNumber == +254702800664 && pin == 1664) {
        window.location.href = "/betting%20app/html/main.html";
    } else {
        alert("INVALID PHONE NUMBER OR PIN CODE. ENTER CORRECT DETAILS.");
    }
}