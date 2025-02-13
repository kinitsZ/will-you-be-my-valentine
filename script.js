const messages = [
    "Are you sure?",
    "Sakit mo nmn",
    "cno ba nmn aq",
    "Pag aq nangulila",
    "pls pls pls pls pls",
    "may iba k na ba bebeqouh",
    "pls borgar and fris ng madami pag yes",
    "Hays lungcoat na aq mga 999999999999",
    "Edi don'ttt!!",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function viewPortrait(){
    window.location.href = "portrait.html";
}