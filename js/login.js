// handler set to login button
document.getElementById('login-btn').addEventListener('click', function () {
    //get user field
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail)
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword)
    if (userEmail == "alakar@headam.com" && userPassword == 'amibaap') {
        window.location.href = 'banking.html';
    } else {
        document.getElementById('error-text').innerText =
            "You are not Headam. Wrong username or Wrong password"
    }
})