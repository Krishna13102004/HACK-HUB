// JavaScript for handling booking buttons and cancer option selection

// Handle Book Appointment Button Clicks
document.querySelectorAll("#appointmentBtn, #appointmentBtnMain").forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "#appointment";  // Navigate to the appointment section
    });
});

// Handle Cancer Option Click
function selectCancer(cancerType) {
    if (cancerType === 'lung-cancer') {
        window.location.href = "lung-cancer.html";
    }
}

const messages = [
    "Your test results are negative. You are healthy.",
    "Your test results are positive. Please consult with a healthcare specialist."
];

const randomIndex = Math.floor(Math.random() * messages.length);
const randomMessage = messages[randomIndex];

document.getElementById("test-result").textContent = randomMessage;