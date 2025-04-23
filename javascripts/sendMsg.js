document.getElementById('telegramForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const botToken = '7841344373:AAHnHbf2BePw4aaYCi3je4hLJ20NDkNwORc';
    const chatId = '7821263836';
    const text = `*New Contact Form Submission* %0A` +
                `Name: ${encodeURIComponent(fullName)} %0A` +
                `Email: ${encodeURIComponent(email)} %0A` +
                `Phone: ${encodeURIComponent(phone)} %0A` +
                `Subject: ${encodeURIComponent(subject)} %0A` +
                `Message: ${encodeURIComponent(message)}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=Markdown`;

    try {
        const response = await fetch(telegramUrl, {
            method: 'GET'
        });

        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('telegramForm').reset();
        } else {
            const errorData = await response.json();
            alert(`Failed to send message: ${errorData.description}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the message');
    }
});
