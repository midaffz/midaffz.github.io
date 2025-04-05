<?php
header('Content-Type: application/json');

$response = ['success' => false, 'error' => ''];

try {
    // Get JSON input
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Validate input
    if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
        throw new Exception('All fields are required');
    }

    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email format');
    }

    // Sanitize data
    $name = htmlspecialchars($data['name']);
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($data['message']);

    // Send email (replace with your actual email logic)
    $to = 'your@email.com';
    $subject = "New Contact: $name";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        $response['success'] = true;
    } else {
        throw new Exception('Failed to send email');
    }

} catch (Exception $e) {
    $response['error'] = $e->getMessage();
}

echo json_encode($response);
