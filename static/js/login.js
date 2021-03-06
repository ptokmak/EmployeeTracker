//   The front-end scripts for the login page.

// Writing a message out to the message area.
function writeMessage(data) {
    if (data.success)
        successMessage(data.message);
    else
        dangerMessage(data.message);
}

// The post to perform on login.
function postLogin() {
    $.ajax({
        url: '/api/push/login/',
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(joinJSON($('#loginForm').serializeArray()))
    }).done(function (data) {
        if (data.success)
            window.location.href = '/';
        else
            dangerMessage(data.message);
    });
    return false;
}

// The post to perform on register.
function postRegister() {
    $.ajax({
        url: '/api/push/register/',
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(joinJSON($('#registerForm').serializeArray()))
    }).done(writeMessage);
}

// Adding the callbacks onto the buttons.
$(document).ready(function () {
    $('#messageArea').hide();

    $('#loginForm').submit(postLogin);
    $('#registerForm').submit(function () {
        postRegister();
        return false;
    });
});
