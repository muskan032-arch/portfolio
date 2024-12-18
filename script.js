document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const statusMessage = document.getElementById("status-message");

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        statusMessage.textContent = "Email sent successfully!";
        statusMessage.style.color = "green";
      } else {
        statusMessage.textContent = "Failed to send email.";
        statusMessage.style.color = "red";
      }
    } catch (error) {
      console.error(error);
      statusMessage.textContent = "An error occurred.";
      statusMessage.style.color = "red";
    }
  });