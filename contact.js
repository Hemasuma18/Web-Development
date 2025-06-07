    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      document.getElementById("nameError").textContent = name ? "" : "Name is required";
      document.getElementById("emailError").textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Invalid email";
      document.getElementById("messageError").textContent = message.length >= 10 ? "" : "Message must be at least 10 characters";

      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
        valid = false;
      }

      if (valid) {
        document.getElementById("successMessage").textContent = "Form submitted successfully!";
        this.reset();
        setTimeout(() => {
          document.getElementById("successMessage").textContent = "";
        }, 3000);
      }
    });