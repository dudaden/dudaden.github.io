<?php
$q1 = $_POST['like'];
$q2 = $_POST['often'];
$q3 = $_POST['journey']
$q4 = $_POST['travel']
$q5 = $_POST['notcities']
$q6 = $_POST['likeRussia']
$q7 = $_POST['notstandart']
$age = $_POST['age']

$subject = "=?utf-8?B?".base64_encode("Message for Questionaries")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail("dzankydepils@gmail.com", $subject, $message, $headers);
echo $success;
?>