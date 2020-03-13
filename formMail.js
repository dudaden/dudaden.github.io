$("#sendMail").on("click", function() {
var q1 = $("like").val();
var q2 = $("often").val();
var q3 = $("journey").val();
var q4 = $("travel").val();
var q5 = $("notcities").val();
var q6 = $("likeRussia").val();
var q7 = $("notstandart").val();
var age = $("age").val();

if(q1 == "") {
    $("errorMess").text("Please select one");
    return false;
} else if(q2 == "") {
    $("errorMess").text("Please select one");
    return false;
} else if(q3 == "") {
    $("errorMess").text("Please select one");
    return false;
} else if(q4 == "") {
    $("errorMess").text("Please select one");
    return false;
} else if(q5 == "") {
    $("errorMess").text("Please select one");
    return false;
} else if(q6 == "") {
    $("errorMess").text("Please select one");
    return false;
} else if(q7 == "") {
    $("errorMess").text("Please select one");
    return false;
} else if(age =="" || age == " ") {
    $("errorMess").text("Please select one");
    return false;   }
    $("errorMess").text("");
}
$.ajax({
    url: 'mail.php',
    type: 'POST',
    cache: false,
    data: { 'q1': like,  'q2' : often,  'q3' : journey,  'q4' : travel, 'q5' : notcities, 'q6' : likeRussia,  'q7' : notstandart, 'age' : age, },
    dataType: 'html',
    beforeSend: function() {
        $("#sendMail").prop("disabled", true);
    },
    success: function(data) {
        if(!data)
        alert("Message not send")
        else
        $("#mailForm").trigger("reset");
        $("#sendMail").prop("disabled", false);
    }
});
