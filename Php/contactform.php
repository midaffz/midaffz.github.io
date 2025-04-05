<?php
header('Content-Type: text/plain');

// Validate required fields
$required = ['name', 'email', 'message'];
foreach ($required as $field) {
    if (empty($_POST[$field])) {
        die("All fields are required");
    }
}

// Validate email format
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    die("Invalid email address");
}

// Sanitize inputs
$name = htmlspecialchars($_POST['name']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($_POST['message']);

// Configure email
$to = 'midaff@camels.today';
$subject = "New Contact: $name";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// HTML email body
$body = "
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Message:</strong></p>
    <p>".nl2br($message)."</p>
";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "Failed to send email. Check server configuration.";
}
