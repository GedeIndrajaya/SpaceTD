function validateForm() {
  event.preventDefault();

  var email = document.getElementById("Email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var password = document.getElementById("userPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var gender = document.getElementById("gender").value;

  // Email validation
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Phone number validation
  if (!validatePhoneNumber(phoneNumber)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  // Password validation
  if (!validatePassword(password)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, and be alphanumeric.");
    return false;
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  // Gender validation
  if (gender === "") {
    alert("Please choose a gender.");
    return false;
  }

  // Form is valid
  return true;
}

function validateEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
  var phoneNumberRegex = /^\d+$/;
  return phoneNumberRegex.test(phoneNumber);
}

function validatePassword(password) {
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
}
