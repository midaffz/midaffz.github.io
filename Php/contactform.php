<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'midaff@camels.today';
    $subject = 'New Contact Form Submission';
    
    // Sanitize inputs
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        showMessage('Invalid email address', 'error');
        return;
    }
    
    // Build headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Build message body
    $body = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong></p>
        <p>".nl2br($message)."</p>
    ";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        showMessage('Message sent successfully!', 'success');
    } else {
        showMessage('Failed to send message', 'error');
    }
}

function showMessage($msg, $type) {
    echo "<script>
        window.location.href = 'index.html?status=$type&msg=".urlencode($msg)."';
    </script>";
    exit();
}

// Handle status message display in HTML
if (isset($_GET['status']) && isset($_GET['msg'])) {
    $statusType = $_GET['status'];
    $statusMsg = urldecode($_GET['msg']);
}
