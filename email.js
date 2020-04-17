$("#sendMail").on("click", function() {
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

    if(email == "") {
        $("#errorMess").text("Write your email");
        return false;
    } else if(name == "") {
        $("#errorMess").text("Write your name");
        return false;
    } else if(phone == "") {
        $("#errorMess").text("Write your phone");
        return false;
    } else if(message.length < 5) {
        $("#errorMess").text("Write your message");
        return false;
    }
    
    $("#errorMess").text("");

    $.ajax({
        url: 'search.php',
        type: 'POST',
        cache: false,
        data: { 
            'name': name,
            'email': email,
            'phone': phone,
            'message': message
        },
        dataType: 'html',

        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(!data)
          alert("Message not send!");
          else
          $("mailForm").trigger("reset");
          $("#sendMail").prop("disabled", false);
        }
    });
})

