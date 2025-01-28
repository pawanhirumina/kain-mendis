   // On form submission, redirect to the thank you page
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission behavior

            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
            })
            .then(response => {
                if (response.ok) {
// Redirect to the thank you page after form submission
                    window.location.href = '/thankyou.html';
                } else {
                    alert('Error! Something went wrong.');
                }
            })
            .catch(error => {
                alert('Error! Something went wrong.');
            });
        });