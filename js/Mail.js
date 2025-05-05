document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("BYkOyXQ5DAiZA9McX");

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_rksrlaa", "template_pqg9e9i", this)
            .then(function () {
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset();
            }, function (error) {
                console.error("EmailJS Error:", error);
                alert("Failed to send message. Please try again.");
            });
    });
});

