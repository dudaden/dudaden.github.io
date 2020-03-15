$("#sendMail").on("click", function() {
    
    var like = document.querySelector('input[name="q1"]:checked').value;
    var often = document.querySelector('input[name="q2"]:checked').value;
    var journey = document.querySelector('input[name="q3"]:checked').value;
    var travel = document.querySelector('input[name="q4"]:checked').value;
    var notcities = document.querySelector('input[name="q5"]:checked').value;
    var likeRussia = document.querySelector('input[name="q6"]:checked').value;
    var notstandart = document.querySelector('input[name="q7"]:checked').value;
    var age = document.querySelector('input[name="age"]:checked').value;

    console.log(like)
    console.log(often)
    console.log(journey)
    console.log(travel)
    console.log(notcities)
    console.log(likeRussia)
    console.log(notstandart)
    console.log(age)

    if(like == undefined) {
        $("errorMess").text("Please select one");
        return false;
    } else if(often == undefined) {
        $("errorMess").text("Please select one");
        return false;
    } else if(journey == undefined) {
        $("errorMess").text("Please select one");
        return false;
    } else if(travel == undefined) {
        $("errorMess").text("Please select one");
        return false;
    } else if(notcities == undefined) {
        $("errorMess").text("Please select one");
        return false;
    } else if(likeRussia == undefined) {
        $("errorMess").text("Please select one");
        return false;
    } else if(notstandart == undefined) {
        $("errorMess").text("Please select one");
        return false;
    } else if(age =="" || age == " ") {
        $("errorMess").text("Please select one");
        return false;   
    }
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        cache: false,
        data: { 'q1': like,  'q2' : often, 'q3' : journey,  'q4' : travel, 'q5' : notcities, 'q6' : likeRussia,  'q7' : notstandart, 'age' : age, },
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

