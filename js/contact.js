function validateForm() {
    var name = $("#fname").val();
    var number = $("#phone").val();
    var email = $("#email").val();
    if (name == "" || number == "" || email == "") {
        alert("You have not filled out the required fields.");
    }
    else {
        alert("Thank you for contacting me, I will respond to you promptly.")
    }
}

$(document).ready(function() {
    $("#submit").click(function() {
        validateForm();
    });
})