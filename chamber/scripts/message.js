// visit-message.js

// Verifica se esta é a primeira visita do usuário
if (!localStorage.getItem('lastVisit')) {
    document.getElementById('visit-message').textContent = 'Welcome! Let us know if you have any questions.';
} else {
    // Obtenha a data da última visita do localStorage
    const lastVisit = new Date(localStorage.getItem('lastVisit'));
    const currentDate = new Date();

    // Calcule a diferença em milissegundos entre as datas
    const timeDiff = currentDate - lastVisit;

    // Calcule o número de dias entre as visitas
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Determine a mensagem com base no número de dias
    let message = '';
    if (daysDiff === 1) {
        message = 'You last visited 1 day ago.';
    } else if (daysDiff > 1) {
        message = `You last visited ${daysDiff} days ago.`;
    } else {
        message = 'Back so soon! Awesome!';
    }

    // Exiba a mensagem na div visit-message
    document.getElementById('visit-message').textContent = message;
}

// Atualize o localStorage com a data da última visita
const currentDate = new Date();
localStorage.setItem('lastVisit', currentDate);

