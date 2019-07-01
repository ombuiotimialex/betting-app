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

function pageLoaded() {
    generateMatchData()
    generateTransactions()
    generateBetHistory()
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
    let tableMatches = document.getElementById("placeBetMatches");

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
    ];

    for (let i = 0; i < matches.length; i++) {
        let match = matches[i];

        let matchRow = "<tr>" +
            "<td colspan='3' align='center'>" +
            "<div>" + match.teams[0].name + ' vs ' + match.teams[1].name + "</div>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>" +
            "<input type='button' class='colour' value='Home " + match.teams[0].odd + "'>" +
            "<input type='button' class='colour' value='Draw " + match.teams[2].draw + "'>" +
            "<input type='button' class='colour' value='Away " + match.teams[1].odd + "'>" +
            "</td>" +
            "</tr>";

        tableMatches.innerHTML += matchRow;
    }
}

function generateTransactions() {
    let transactions = document.getElementById("transactions");
    let payments = [
        {
            transactionReference: "NSJDHDDDD",
            amount: '28731',
            time: '19-6-2019  09.09.00'
        },
        {
            transactionReference: "TTSJIYTSY",
            amount: '76573',
            time: '19-8-2019'
        },
        {
            transactionReference: "UYYCDASD",
            amount: '23735',
            time: '20-3-2019  09.01. 03'
        },
        {
            transactionReference: "TTSJIYTSY",
            amount: '4232',
            time: '13-2-23  09. 00. 00'
        },
        {
            transactionReference: "DISHDCS",
            amount: '1333',
            time: '21-3-2019  09.09.09'
        },
        {
            transactionReference: "NSJDHDDDD",
            amount: '28731',
            time: '19-6-2019  09.09.00'
        },
        {
            transactionReference: "TTSJIYTSY",
            amount: '76573',
            time: '19-8-2019'
        },
        {
            transactionReference: "UYYCDASD",
            amount: '23735',
            time: '20-3-2019  09.01. 03'
        },
        {
            transactionReference: "TTSJIYTSY",
            amount: '4232',
            time: '13-2-23  09. 00. 00'
        },
        {
            transactionReference: "DISHDCS",
            amount: '1333',
            time: '21-3-2019  09.09.09'
        },
    ]
    for (let j = 0; j <= payments.length; j++) {
        let payment = payments[j];

        let transactionRow = "<tr>" +
            "<td colspan='3' align='center'>" +
            "<div>" + payment.transactionReference + payment.time + "</div>" +
            "</td>" +
            "<td>" +
            "<div class='paymentsButton'>" + payment.amount +
            "</div>" +
            "</td>" +
            "</tr>";
        transactions.innerHTML += transactionRow;

    }
}

function generateBetHistory() {
    let betHistory = document.getElementById("betHistory");
    let bets = [
        {
            teams:
                [
                    {
                        name: "Liverpool",
                        odd: '2.1',
                        goals: '3'
                    },
                    {
                        name: "Manchester United",
                        odd: '3.22',
                        goals: '1'
                    },
                    {
                        draw: '2.32'
                    },

                    {
                        pick: '1'
                    },
                    {
                        result: '1'
                    },
                ],
            teams:
                [
                    {
                        name: "Chelsea",
                        odd: '2.1',
                        goals: '2'
                    },
                    {
                        name: "Liverpool",
                        odd: '3.22',
                        goals: '0'
                    },
                    {
                        draw: '2.32'
                    },
                    {
                        pick: '1'
                    },
                    {
                        result: '1'
                    },
                ],
            teams:
                [
                    {
                        name: "Chile",
                        odd: '2.1',
                        goals: '2'
                    },
                    {
                        name: "Manchester United",
                        odd: '3.22',
                        goals: '3'
                    },
                    {
                        draw: '2.32'
                    },
                    {
                        pick: '1'
                    },
                    {
                        result: '2'
                    },
                ],
            teams:
                [
                    {
                        name: "Chelsea",
                        odd: '2.1',
                        goals: '2'
                    },
                    {
                        name: "Chile",
                        odd: '3.22',
                        goals: "2"
                    },
                    {
                        draw: '2.32'
                    },
                    {
                        pick: 'X'
                    },
                    {
                        result: '1'
                    },
                ],
            teams:
                [
                    {
                        name: "Chelsea",
                        odd: '2.1',
                        goals: '1'
                    },
                    {
                        name: "Manchester City",
                        odd: '3.22',
                        goals: '3'
                    },
                    {
                        draw: '2.32'
                    },
                    {
                        pick: '1'
                    },
                    {
                        result: '1'
                    },
                ],
            teams:
                [
                    {
                        name: "Chelsea",
                        odd: '2.1',
                        goals: '3'
                    },
                    {
                        name: "Queen Park Rangers",
                        odd: '3.22',
                        goals: '4'
                    },
                    {
                        draw: '2.32'
                    },
                    {
                        pick: '2'
                    },
                    {
                        result: '2'
                    },
                ],
            teams:
                [
                    {
                        name: "Chelsea",
                        odd: '2.1',
                        goals: '4'
                    },
                    {
                        name: "Manchester United",
                        odd: '3.22',
                        goals: '4'
                    },
                    {
                        draw: '2.32'
                    },
                    {
                        pick: '2'
                    },
                    {
                        result: '2'
                    },
                ],
            teams:
                [
                    {
                        name: "Chelsea",
                        odd: '2.1',
                        goals: '2'
                    },
                    {
                        name: "Manchester United",
                        odd: '3.22',
                        goals: '2'
                    },
                    {
                        draw: '2.32'
                    },
                    {
                        pick: '1'
                    },
                    {
                        result: '2'
                    },
                ],
            teams:
                [
                    {
                        name: "Chelsea",
                        odd: '2.1',
                        goals: '3'
                    },
                    {
                        name: "Postal Rangers",
                        odd: '3.22',
                        goals: '2'
                    },
                    {
                        draw: '2.32'
                    },
                    {
                        pick: '2'
                    },
                    {
                        result: '1'
                    },
                ],
            teams:
                [
                    {
                        name: "Crystal palace",
                        odd: '2.1',
                        goals: '3'
                    },
                    {
                        name: "Liverpool",
                        odd: '3.22',
                        goals: '1'

                    },
                    {
                        draw: '2.32'
                    },
                    {
                        pick: 'X'
                    },
                    {
                        result: '2'
                    },
                ]
        }
    ];
    for (let k = 0; k <= bets.length; k++) {
        let bet = bets[k];

        let betHistoryRow = "<tr>" +
            "<td" > +
                "<div>" + bet.teams.name + bet.teams.odd +
            "</div>" +
            "</td>" +
            "<td>" +
            "<div>" + bet.teams.draw +
            "</div>" +
            "</td>" +
            "<td>" +
            "<div>" + bet.teams.name +
            "</div>" +
            "</td>" +
            "<td>" +
            "<div>" + bet.teams.pick +
            "</div>" +
            "</td>" +
            "<td>" +
            "<div>" + bet.teams.result +
            "</div>" +
            "</td>" +
            "</tr>";

        betHistory.innerHTML += betHistoryRow;
    }
}