<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $address = $_POST['address'];
    $town = $_POST['town'];
    $fish = $_POST['fish'];
    $weight = $_POST['weight'];

    $to = "Chamaththarupathi@gmail.com";  // Replace with your email
    $subject = "New Fish Order";
    $message = "New order details:\n";
    $message .= "Name: $name\n";
    $message .= "Mobile: $mobile\n";
    $message .= "Address: $address\n";
    $message .= "Town: $town\n";
    $message .= "Fish: $fish\n";
    $message .= "Weight: $weight kg\n";

    $headers = "From:aluthmalu.lk";  // Replace with your domain or hosting

    if (mail($to, $subject, $message, $headers)) {
        echo "Order submitted successfully!";
    } else {
        echo "Error submitting order!";
    }
}
?>
