<?php
$email = $_POST('email');
$name = $_POST('name');
$phone = $_POST('email');
$message = $_POST('message');

$subject = "=?utf-8?B?".base64_encode("Message from website")."?=";
$headers = "Form: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";


$success = mail("dzankydepils@gmail.com", $subject, $message, $headers);
echo $success;
?>