let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function() {
    let currentScrollPos = window.scrollY;
    const header = document.querySelector(".left");
    
    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        header.style.backgroundColor = "transparent";
    } else {
        // Scrolling down
        header.style.backgroundColor = "#3c3b3b4f";
        header.style.borderRadius = "20px";
    }
    prevScrollPos = currentScrollPos;
});

// document.addEventListener('DOMContentLoaded', function () {
//     const alerts = document.getElementById('alertmessage');
//     const myform = document.getElementById('myform'); // Replace with the actual element ID

//     fetch('/')
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 alerts.style.visibility = 'visible';
//                 alerts.textContent = data.message;
//                 // myform.textContent = data.formData; // Display the form data
//             }
//         })
//         .catch(error => {
//             console.error(error);
//         });
// });