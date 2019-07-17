// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDc-Jz3wIGJH31tEuC2zGc1tyM00QHt60A",
  authDomain: "contactform-95f07.firebaseapp.com",
  databaseURL: "https://contactform-95f07.firebaseio.com",
  projectId: "contactform-95f07",
  storageBucket: "",
  messagingSenderId: "68091864064",
  appId: "1:68091864064:web:29055481170e8a42"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Get current date and time (not in use)
var _now = new Date().getTime();

// Footer Date
var today = new Date().toDateString()

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();

  newMessageRef.set({
    date: today,
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}

