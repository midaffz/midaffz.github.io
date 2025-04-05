<?php
header('Content-Type: application/json');

// Configuration
$recaptchaSecret = 'YOUR_RECAPTCHA_SECRET_KEY';
$toEmail = 'your-email@example.com';
$fromEmail = 'noreply@yourdomain.com';

$response = ['success' => false, 'errors' => []];

try {
    // Validate reCAPTCHA
    $captcha = $_POST['g-recaptcha-response'] ?? '';
    $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$captcha");
    $captchaResponse = json_decode($verify);
    
    if (!$captchaResponse->success || $captchaResponse->score < 0.5) {
        throw new Exception('captcha', 'CAPTCHA verification failed');
    }

    // Validate inputs
    $required = ['name', 'email', 'message'];
    foreach ($required as $field) {
        if (empty($_POST[$field])) {
            throw new Exception($field, 'This field is required');
        }
    }

    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        throw new Exception('email', 'Invalid email address');
    }

    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Prepare email
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $fromEmail\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $emailBody = "
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong></p>
        <p>".nl2br($message)."</p>
    ";

    // Send email
    if (mail($toEmail, $subject, $emailBody, $headers)) {
        $response['success'] = true;
        $response['message'] = 'Thank you! Your message has been sent.';
    } else {
        throw new Exception('form', 'Failed to send email');
    }

} catch (Exception $e) {
    $response['errors'][$e->getMessage()] = $e->getMessage();
}

echo json_encode($response);
?>
