$("#sendMail").on("click", function() {
    
    var like = document.querySelector('input[name="q1"]:checked');
    var often = document.querySelector('input[name="q2"]:checked');
    var journey = document.querySelector('input[name="q3"]:checked');
    var travel = document.querySelector('input[name="q4"]:checked');
    var notcities = document.querySelector('input[name="q5"]:checked');
    var likeRussia = document.querySelector('input[name="q6"]:checked');
    var notstandart = document.querySelector('input[name="q7"]:checked');
    var age = document.querySelector('input[name="age"]');

    console.log(like)
    console.log(often)
    console.log(journey)
    console.log(travel)
    console.log(notcities)
    console.log(likeRussia)
    console.log(notstandart)
    console.log(age)

    if(like === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(often === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(journey === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(travel === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(notcities === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(likeRussia === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(notstandart === null) {
        $("#errorMess").text("Please select one");
        return false;
    } else if(age === null || age.value === "") {
        $("#errorMess").text("Please select one");
        return false;   
    }
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        cache: false,
        data: { 
            'q1': like.value,
            'q2' : often.value,
            'q3' : journey.value,
            'q4' : travel.value,
            'q5' : notcities.value,
            'q6' : likeRussia.value, 
            'q7' : notstandart.value, 
            'age' : age.value, 
        },
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            console.log(data)
            if(!data) {
                alert("Message not send")
            } else {
                $("#mailForm").trigger("reset");
                $("#sendMail").prop("disabled", false);    
            }
        },
        error: function(data) {
            console.log("FAILED")
            console.log(data)
        }
    });
})

