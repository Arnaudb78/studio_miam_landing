
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-toggle").addEventListener("click", function () {
        const menu = document.getElementById("menu");
        menu.classList.toggle("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sendButtons = document.querySelectorAll(".send-button");

    sendButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const emailInput = this.closest(".email-container").querySelector(".email-input");
            const email = emailInput.value;
            const messageDiv = document.querySelector(".message");

            if (!email) {
                messageDiv.textContent = "Veuillez entrer une adresse e-mail.";
                return;
            }

            // Replace by 'http://localhost:5001/newsletter for development
            //https://pacific-reaches-55510-1cc818501846.herokuapp.com/newsletter
            fetch("https://pacific-reaches-55510-1cc818501846.herokuapp.com/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    emailInput.value = "";

                    messageDiv.textContent = "Merci ! Votre adresse e-mail a été envoyée.";
                })
                .catch((error) => {
                    emailInput.value = "";
                    messageDiv.textContent = "Une erreur est survenue. Veuillez réessayer plus tard.";
                    console.error("There was a problem with the fetch operation:", error);
                });
        });
    });
});