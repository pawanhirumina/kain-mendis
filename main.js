       // Center the element after scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                let targetElement = document.querySelector(this.getAttribute('href'));

                // Scroll to the element and center it
 targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // This will center the element in the viewport
                });
            });
        });


        // Open the full-screen overlay menu
function openNav() {
    document.getElementById("overlay").style.width = "100%";
}

// Close the full-screen overlay menu
function closeNav() {
    document.getElementById("overlay").style.width = "0%";
}





// Call the function to check for page validity
checkPageValidity();