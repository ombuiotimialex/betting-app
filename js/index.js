function login() {

    var userNumber = document.getElementById("phoneNumber").value;
    var pin = document.getElementById("pin").value;

    if (userNumber === "") {
        alert("ENTER USER NUMBER")
    } else if (pin === "") {
        alert("ENTER PIN")
    } else if (userNumber === '+254702800664' && pin === '1664') {
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

function generateMatchData() {
    let matches = [
        {
            teams:
                [
                    {
                        name: "Chelsea",
                        odd: '1.23',
                        coach: "Sir Alex"
                    },
                    {
                        name: "Manchester United",
                        odd: '3.23',
                        coach: "Brian"
                    },
                    {
                        draw: '2.32',
                    },
                ],
            matchInfo:
                {
                    venue: "Stamford Bridge",
                    time: '18-06-2019  28.00.00 Pm',
                    division: "EPL",
                    referee: "Mr. Eddie"
                }

        },
        {
            teams:
                [
                    {
                        name: "Liverpool",
                        odd: '2.21',
                        coach: "Stanley"
                    },
                    {
                        name: "Manchester City",
                        odd: '2.13',
                        coach: "Andrew"
                    },
                    {
                        draw: '2.33'
                    },
                ],
            matchInfo:

                {
                    venue: "Uhuru Garden",
                    time: '18-06-2019 17.00.00 Pm',
                    division: "EPL",
                    referee: " Audrey"
                }

        },
        {
            teams:
                [
                    {
                        name: "Crystal Palace",
                        odd: '2.11',
                        coach: "Daniels"
                    },
                    {
                        name: " Real Madrid",
                        odd: '4.64',
                        coach: " Augustine"
                    },
                    {
                        draw: '3.43'
                    }
                ],
            matchInfo:

                {
                    venue: "Stamford Bridge",
                    time: "18-06-2019  28.00.00 Pm",
                    division: "EPL",
                    referee: "Mr. Eddie"
                }

        },
        {
            teams:
                [
                    {
                        name: "Ajax",
                        odd: '2.54',
                        coach: " Faustine"
                    },
                    {
                        name: "Juventus",
                        odd: '4.43',
                        coach: " Christopher"
                    },
                    {
                        draw: '2.66'
                    }
                ],
            matchInfo:

                {
                    venue: "Pinper",
                    time: "18-06-2019 17.00.00 Pm",
                    division: "EPL",
                    referee: " Luis"
                }

        },
        {
            teams:
                [
                    {
                        name: "Ajax",
                        odd: '2.54',
                        coach: " Faustine"
                    },
                    {
                        name: "Tottenham",
                        odd: '4.43',
                        coach: " Calla"
                    },
                    {
                        draw: '2.66'
                    }
                ],
            matchInfo:

                {
                    venue: "Spain",
                    time: "18-06-2019 17.00.00 Pm",
                    division: "EPL",
                    referee: " Caleb"
                }

        }
    ]
}