// URL do JSON com os dados dos membros
const linksURL = "https://renatasouto.github.io/wdd230/chamber/data/members.json";

// Função para embaralhar um array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função para exibir membros Gold e Silver na página
function displaySpotlightMembers(membersData, numMembersToShow) {
  const spotlightContainer = document.querySelector(".spotlights-section");

  // Limpar as empresas de destaque existentes
  spotlightContainer.innerHTML = '';

  // Adicionar o título da seção
  const titleElement = document.createElement('h2');
  titleElement.textContent = 'Company Spotlights';
  spotlightContainer.appendChild(titleElement);

  // Filtrar apenas membros Gold e Silver
  const goldAndSilverMembers = membersData.members.filter(
    member => member.membership_level === "Gold" || member.membership_level === "Silver"
  );

  // Embaralhar a ordem dos membros Gold e Silver
  shuffleArray(goldAndSilverMembers);

  // Exibir apenas as três primeiras empresas de destaque
  for (let i = 0; i < numMembersToShow; i++) {
    const member = goldAndSilverMembers[i];
    if (member) {
      const spotlightElement = document.createElement('div');
      spotlightElement.classList.add('spotlight');

      const imgElement = document.createElement('img');
      imgElement.src = member.image;
      imgElement.alt = `${member.name} Logo`;

      const nameElement = document.createElement('h3');
      const linkElement = document.createElement('a');
      linkElement.href = member.website;
      linkElement.target = '_blank'; // Abre em uma nova guia
      linkElement.textContent = member.name;
      nameElement.appendChild(linkElement);

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = member.other_info;

      const buttonElement = document.createElement('button');
      buttonElement.className = 'more-info-button';
      buttonElement.textContent = 'To Know More';

      // Adicione um evento de clique para abrir o link do membro
      buttonElement.addEventListener('click', () => {
        window.open(member.website, '_blank');
      });

      spotlightElement.appendChild(imgElement);
      spotlightElement.appendChild(nameElement);
      spotlightElement.appendChild(descriptionElement);
      spotlightElement.appendChild(buttonElement);

      spotlightContainer.appendChild(spotlightElement);
    }
  }
}

// Função para carregar o JSON de membros de destaque
function loadSpotlightMembers() {
  fetch(linksURL)
    .then(response => response.json())
    .then(data => {
      displaySpotlightMembers(data, 3); // Mostrar três membros de destaque
    })
    .catch(error => {
      console.error("Erro ao carregar JSON de membros:", error);
    });
}
// Chame a função para carregar e exibir membros de destaque na página
loadSpotlightMembers();
