$(document).ready(function() {
    $('#submit').click(function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#submit').val();
        var message = $('#text').val();
        if (name == '' || email == '' || subject == '' || message == '') {
            alert('input fields');
        } else {
            alert('Message Sent!!');
            console.log('submit clicked');
        }
    });
});