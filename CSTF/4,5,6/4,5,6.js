function showMessage(id, message) {
    document.getElementById(id).innerHTML = message;
}

function validateForm() {

    // GET VALUES

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let course = document.getElementById("course").value;

    // CLEAR OLD MESSAGES

    showMessage("usernameError", "");
    showMessage("emailError", "");
    showMessage("mobileError", "");
    showMessage("ageError", "");
    showMessage("passwordError", "");
    showMessage("confirmPasswordError", "");
    showMessage("courseError", "");
    showMessage("success", "");

    let isValid = true;

    // USERNAME

    if (username == "") {
        showMessage("usernameError", "Enter username");
        isValid = false;
    }

    // EMAIL

    else if (
        email.indexOf("@") < 1 ||
        email.lastIndexOf(".") < email.indexOf("@") + 2 ||
        email.lastIndexOf(".") == email.length - 1
    ) {
        showMessage("emailError", "Enter valid email");
        isValid = false;
    }

    // MOBILE

    else if (
        mobile.length != 10 ||
        isNaN(mobile) ||
        mobile.charAt(0) < 6
    ) {
        showMessage("mobileError", "Enter valid mobile number");
        isValid = false;
    }

    // AGE

    else if (age < 18 || age > 60) {
        showMessage("ageError", "Age must be between 18 and 60");
        isValid = false;
    }

    // PASSWORD

    else if (password.length < 8) {
        showMessage("passwordError", "Minimum 8 characters");
        isValid = false;
    }

    else if (/[A-Z]/.test(password) == false) {
        showMessage("passwordError", "Add one capital letter");
        isValid = false;
    }

    else if (/[0-9]/.test(password) == false) {
        showMessage("passwordError", "Add one number");
        isValid = false;
    }

    else if (/[!@#$%^&*]/.test(password) == false) {
        showMessage("passwordError", "Add one special character");
        isValid = false;
    }

    // CONFIRM PASSWORD

    else if (confirmPassword != password) {
        showMessage(
            "confirmPasswordError",
            "Passwords do not match"
        );
        isValid = false;
    }

    // COURSE

    else if (course == "") {
        showMessage(
            "courseError",
            "Please select a course"
        );
        isValid = false;
    }

    // SUCCESS

    if (isValid == true) {
        showMessage(
            "success",
            "Registration Successful! Enrolled in " + course
        );
    }

    return false;
}