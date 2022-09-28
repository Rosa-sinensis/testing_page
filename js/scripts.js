// EmailJS
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_kq03dfm';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('review').value = '';
    }, (err) => {
        btn.value = 'Send';
        alert(JSON.stringify(err));
    });
});
