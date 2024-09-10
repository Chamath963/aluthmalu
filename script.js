// Get the selected fish details from localStorage
const fishName = localStorage.getItem('selectedFish');
const fishWeight = localStorage.getItem('selectedWeight');
const finalPrice = localStorage.getItem('finalPrice');

// Display the fish details in the order summary
document.getElementById('selected-fish').textContent = fishName;
document.getElementById('selected-weight').textContent = fishWeight;
document.getElementById('final-price').textContent = finalPrice;

// Handle form submission
document.getElementById('user-details-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get user details from the form
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const town = document.getElementById('town').value;

    // Prepare the message to be sent
    const message = `
        📦 *New Order Received* 📦\n
        🐟 *Fish*: ${fishName}\n
        ⚖️ *Weight*: ${fishWeight} kg\n
        💵 *Total Price*: LKR ${finalPrice}\n
        👤 *Customer Name*: ${name}\n
        📞 *Mobile*: ${mobile}\n
        🏠 *Address*: ${address}, ${town}
    `;

    // Telegram bot API details
    const botToken = '7522262153:AAGtEdu0TDYSDpeNyC4SjbRG1XtP44qf_OY';
    const chatId = '6336268538';

    // Send the message to Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Order sent successfully!');
        } else {
            alert('Error sending the order. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending the order. Please try again.');
    });
});
