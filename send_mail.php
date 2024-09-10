<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $mobile = isset($_POST['mobile']) ? htmlspecialchars($_POST['mobile']) : '';
    $address = isset($_POST['address']) ? htmlspecialchars($_POST['address']) : '';
    $town = isset($_POST['town']) ? htmlspecialchars($_POST['town']) : '';
    $fish = isset($_POST['fish']) ? htmlspecialchars($_POST['fish']) : '';
    $weight = isset($_POST['weight']) ? htmlspecialchars($_POST['weight']) : '';
    $price = isset($_POST['price']) ? htmlspecialchars($_POST['price']) : '';

    // Validate the form data
    if (empty($name) || empty($mobile) || empty($address) || empty($town) || empty($fish) || empty($weight) || empty($price)) {
        echo "All fields are required!";
        exit();
    }

    // Set up email details
    $to = "chamaththarupathi@gmail.com";  // Your Gmail address
    $subject = "New Fish Order";
    $message = "New order details:\n";
    $message .= "Name: $name\n";
    $message .= "Mobile: $mobile\n";
    $message .= "Address: $address\n";
    $message .= "Town: $town\n";
    $message .= "Fish: $fish\n";
    $message .= "Weight: $weight kg\n";
    $message .= "Total Price: LKR $price\n";  // Add price to the message

    // Proper headers for sending mail
    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: no-reply@yourdomain.com\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Order submitted successfully!";
    } else {
        echo "Error submitting order!";
    }
}
?>
