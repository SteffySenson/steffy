</script>
<script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
		function sendEmail() {
			Email.send({
				SecureToken : "YourSecureToken",
				To : "steffysenson@gmail.com",
				From : email,
				Subject : "New Message from " + name,
				Body : message
			}).then(
				message => alert("Message sent successfully!")
			);
		}
		document.getElementById("contact-form").addEventListener("submit", function(event) {
			event.preventDefault(); // Prevent form from submitting normally
			sendEmail();
			this.reset();
		});
</script>