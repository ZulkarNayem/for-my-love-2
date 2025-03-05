const messages = [
    "Are you sure?",
    "Really sure??",
    "Think again! 🥺",
    "Last chance... 😢",
    "Come on, say yes! 😭",
    "Okay... but I still love you! ❤️",
    "You are breaking my heart! 💔",
    "I won’t give up on you! 😣",
    "Is that your final answer? 😢",   
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    noButton.textContent = messages[messageIndex]; // Change text of "No" button
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase only the "Yes" button size
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize + 100}px`; // Use +10px instead of +50px for a gradual increase
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
