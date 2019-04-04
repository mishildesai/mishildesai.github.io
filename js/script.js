var quotes = [
    ["Bill Gates","Life is not fair; get used to it."],
    ["Richard Stallman","Anything that prevents you from being friendly, a good neighbour, is a terror tactic."],
    ["Doug Linder","A good programmer is someone who always looks both ways before crossing a one-way street."],
    ["Oscar Godson","One of the best programming skills you can have is knowing when to walk away for awhile."],
    ["Michael Hartung","Hardware eventually fails. Software eventually works."],
    ["Kyle Simpson","There's nothing more permanent than a temporary hack."]
];

function setQuote() {
    var random = getRndInteger(0, quotes.length - 1);
    document.getElementById("quote").innerHTML = quotes[random][1];
    document.getElementById("author").innerHTML = "-" + quotes[random][0];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

window.onload = setQuote;