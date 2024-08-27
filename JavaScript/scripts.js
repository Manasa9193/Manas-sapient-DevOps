document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        event.preventDefault();
    }
});

document.getElementById('order-form').addEventListener('submit', function(event) {
    const dessert = document.getElementById('dessert').value;
    const quantity = document.getElementById('quantity').value;
    const orderEmail = document.getElementById('order-email').value;

    if (!dessert || quantity < 1 || !orderEmail) {
        alert('Please fill in all fields correctly!');
        event.preventDefault();
    }
});
