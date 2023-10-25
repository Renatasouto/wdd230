function toggleDescription(button, memberIndex) {
    // Obtenha o elemento do membro específico com base no índice
    fetch('https://renatasouto.github.io/wdd230/chamber/data/members.json')
        .then((response) => response.json())
        .then((data) => {
            const members = data.members;
            const member = members[memberIndex];

            const description = button.nextElementSibling;
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
                button.textContent = 'Hide Description';

                // Agora você pode usar a URL do membro:
                const memberUrl = member.website;
                if (memberUrl) {
                    window.open(memberUrl, '_blank'); // Abre a URL em uma nova guia
                }
            } else {
                description.style.display = 'none';
                button.textContent = 'Show Description';
            }
        })
        .catch((error) => {
            console.error('Error fetching JSON:', error);
        });
}



