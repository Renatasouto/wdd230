document.addEventListener('DOMContentLoaded', function () {
    const event2Description = document.getElementById('event2-description');
    const event2Button = document.querySelector('.event-section li:nth-child(2) .more-info-button');
    const eventButtons = document.querySelectorAll('.more-info-button');

    if (event2Description) {
        event2Button.addEventListener('click', function () {
            if (event2Description.style.display === 'none' || event2Description.style.display === '') {
                event2Description.style.display = 'block';
            } else {
                event2Description.style.display = 'none';
            }
        });
    }

    eventButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const eventDescription = this.previousElementSibling.querySelector('.event-description');
            if (eventDescription) {
                eventDescription.classList.toggle('hidden');
            }
        });
    });
});

