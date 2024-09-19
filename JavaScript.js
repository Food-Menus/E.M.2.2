
function openWhatsApp() {
    const name = document.getElementById('name').value;
    const order = document.getElementById('order').value;
    const phoneNumber = "+201147182463"; 
    const message = `أهلاً، اسمي ${name} وأود طلب ${order}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}

function openTelegram() {
const username = "+201147182463"; // استبدل بالاسم المستخدم للبوت أو القناة
const message = encodeURIComponent("رسالتك هنا"); // استبدل بالرسالة التي تريد إرسالها

const telegramUrl = `https://t.me/${username}?start=${message}`;
window.open(telegramUrl, '_blank');
}

