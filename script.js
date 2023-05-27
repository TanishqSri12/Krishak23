// document.getElementById("login-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     var username = document.getElementById("Krishak_23").value;
//     var password = document.getElementById("Krish@123").value;
  
//     // Here you can perform validation or send the data to a server for verification
  
//     // For demonstration purposes, we'll just log the username and password to the console
//     console.log("Username: " + username);
//     console.log("Password: " + password);
  
//     // You can redirect to another page or show a success message here
//   });
  

 // Get form and input elements
 const loginForm = document.getElementById('loginForm');
 const emailInput = document.getElementById('emailInput');
 const passwordInput = document.getElementById('passwordInput');

 // Event listener for form submission
 loginForm.addEventListener('submit', function(e) {
   e.preventDefault(); // Prevent the form from submitting

   // Perform authentication (replace with your own logic)
   const email = emailInput.value;
   const password = passwordInput.value;
   
   if (email === 'teamkrishak@gmail.com' && password === 'Krish@123') {
     // Authentication successful, redirect to the next page
     window.location.href = 'ind.html';
   } else {
     // Authentication failed, display an error message or take appropriate action
     alert('Invalid Again');

   }
});
