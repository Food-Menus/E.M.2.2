
function openWhatsApp() {
    const name = document.getElementById('name').value;
    const order = document.getElementById('order').value;
    const adress = document.getElementById('adress').value;
    const phoneNumber = "+201147182463"; 
    const message = `أهلاً، اسمي ${name} وأود طلب ${order} علي عنوان ${adress}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function openTelegram() {
const name = document.getElementById('name').value;
const order = document.getElementById('order').value;
const adress = document.getElementById('adress').value;
const username = "+201147182463";
const message = `أهلاً، اسمي ${name} وأود طلب ${order} علي عنوان ${adress}`;

const telegramUrl = `https://t.me/${username}?start=${encodeURIComponent(message)}`;
window.open(telegramUrl, '_blank');
}

