var errormessage = "";
var missingfield = "";

function isEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}

function hasLowerCase(str) {
  return /[a-z]/.test(str);
}

function hasSpecialChar(str) {
  return /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\/?]/.test(str);
}

function togglePassword(inputId) {
  var passwordInput = document.getElementById(inputId);
//   var toggleButton = passwordInput.nextElementSibling;
 var toggleSpan = passwordInput.nextElementSibling;
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleSpan.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleSpan.textContent = "Show";
  }
}
 $("#PhoneNumber").on("keypress", function (e) {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  });

$("#submitbutton").click(function () {
  errormessage = "";
  missingfield = "";

  if ($("#Email").val() == "") {
    missingfield += "<p>Please fill the email.</p>";
  } else if (!isEmail($("#Email").val())) {
    errormessage += "<p>Please enter a valid email address.</p>";
  }

  if ($("#PhoneNumber").val() == "") {
    missingfield += "<p>Please fill the phone number.</p>";
  } else if (!$.isNumeric($("#PhoneNumber").val())) {
    errormessage += "<p>Phone number should only contain digits.</p>";
  } else if ($("#PhoneNumber").val().length > 10) {
    errormessage += "<p>Phone number should not be more than 10 digits.</p>";
  }

 

  if ($("#Password").val() == "") {
    missingfield += "<p>Please fill the password.</p>";
  } else if (
    $("#Password").val().length < 8 ||
    $("#Password").val().length > 15
  ) {
    errormessage +=
      "<p>Password should be between 8 and 15 characters long.</p>";
  } else if (!hasUpperCase($("#Password").val())) {
    errormessage +=
      "<p>Password should contain at least one uppercase letter.</p>";
  } else if (!hasLowerCase($("#Password").val())) {
    errormessage +=
      "<p>Password should contain at least one lowercase letter.</p>";
  } else if (!hasSpecialChar($("#Password").val())) {
    errormessage +=
      "<p>Password should contain at least one special character.</p>";
  }

  if ($("#ConfirmPassword").val() == "") {
    missingfield += "<p>Please fill the confirm password.</p>";
  } else if ($("#Password").val() != $("#ConfirmPassword").val()) {
    errormessage += "<p>Passwords do not match.</p>";
  }

  if (errormessage == "" && missingfield == "") {
    $("#success").html("You are registered!");
    $("#errors").html("");
  } else {
    $("#errors").html(errormessage + missingfield);
    $("#success").html("");
  }
});
