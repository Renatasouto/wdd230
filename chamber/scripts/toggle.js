document.addEventListener('DOMContentLoaded', function() {
    const membersContainer = document.getElementById('members-container');
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');
    
    const membersData = [
        {
            "name": "Natal Tech Solutions",
            "address": "123 Tech Street, Natal, RN, Brazil",
            "phone": "+55 84 1234-5678",
            "website": "https://www.nataltechsolutions.com",
            "image": "https://raw.githubusercontent.com/Renatasouto/wdd230/main/chamber/images/icons8-tech-50.png",
            "membership_level": "Gold",
            "other_info": "Natal Tech Solutions is a leading tech company in Natal, providing innovative solutions for businesses in the region."
        },
        {
            "name": "Sunrise Beach Resort",
            "address": "456 Ocean Avenue, Natal, RN, Brazil",
            "phone": "+55 84 9876-5432",
            "website": "https://www.sunrisebeachresort.com",
            "image": "https://raw.githubusercontent.com/Renatasouto/wdd230/main/chamber/images/icons8-sun-100.png",
            "membership_level": "Silver",
            "other_info": "Enjoy the beautiful beaches of Natal at Sunrise Beach Resort, your perfect getaway in paradise."
          },
          {
            "name": "Natal Fresh Farms",
            "address": "789 Green Road, Natal, RN, Brazil",
            "phone": "+55 84 5555-5555",
            "website": "https://www.natalfreshfarms.com",
            "image": "https://raw.githubusercontent.com/Renatasouto/wdd230/main/chamber/images/icons8-fresh-64.png",
            "membership_level": "Bronze",
            "other_info": "Natal Fresh Farms is your source for the freshest locally grown produce in Natal and surrounding areas."
          },
          {
            "name": "Golden Star Construction",
            "address": "321 Builder's Lane, Natal, RN, Brazil",
            "phone": "+55 84 4444-3333",
            "website": "https://www.goldenstarconstruction.com",
            "image": "https://raw.githubusercontent.com/Renatasouto/wdd230/main/chamber/images/icons8-star-64.png",
            "membership_level": "Platinum",
            "other_info": "Building dreams in Natal, Golden Star Construction is your reliable construction partner for quality projects."
          },
          {
            "name": "Natal Seafood Co.",
            "address": "555 Marina Drive, Natal, RN, Brazil",
            "phone": "+55 84 2222-1111",
            "website": "https://www.natalseafoodco.com",
            "image": "https://raw.githubusercontent.com/Renatasouto/wdd230/main/chamber/images/icons8-lobster-48.png",
            "membership_level": "Silver",
            "other_info": "Bringing the taste of the sea to your plate, Natal Seafood Co. offers the finest seafood in Natal."
          },
          {
            "name": "Natal Green Energy",
            "address": "444 Renewable Road, Natal, RN, Brazil",
            "phone": "+55 84 7777-8888",
            "website": "https://www.natalgreenenergy.com",
            "image": "https://raw.githubusercontent.com/Renatasouto/wdd230/main/chamber/images/icons8-flash-on-48.png",
            "membership_level": "Gold",
            "other_info": "Natal Green Energy is a leader in sustainable energy solutions for Natal and the region."
          },
          {
            "name": "Natal Health Clinic",
            "address": "999 Health Avenue, Natal, RN, Brazil",
            "phone": "+55 84 6666-9999",
            "website": "https://www.natalhealthclinic.com",
            "image": "https://raw.githubusercontent.com/Renatasouto/wdd230/main/chamber/images/icons8-health-50.png",
            "membership_level": "Bronze",
            "other_info": "Your trusted health partner in Natal, providing high-quality medical care and services."
          },
          {
            "name": "Tropical Paradise Tours",
            "address": "789 Beachfront Road, Natal, RN, Brazil",
            "phone": "+55 84 8888-7777",
            "website": "https://www.tropicalparadisetours.com",
            "image": "https://raw.githubusercontent.com/Renatasouto/wdd230/main/chamber/images/icons8-tropical-100.png",
            "membership_level": "Gold",
            "other_info": "Discover the beauty of Natal with Tropical Paradise Tours, offering guided tours and adventures."
          },
          {
            "name": "Natal Design Studio",
            "address": "567 Creative Avenue, Natal, RN, Brazil",
            "phone": "+55 84 9999-3333",
            "website": "https://www.nataldesignstudio.com",
            "image": "https://raw.githubusercontent.com/Renatasouto/wdd230/main/chamber/images/icons8-studio-61.png",
            "membership_level": "Silver",
            "other_info": "Natal Design Studio brings creativity and innovation to your design and branding needs in Natal."
          }

        // Adicione mais membros aqui...
    ];
    
    function generateMemberCard(member) {
        return `
            <div class="member-card">
                <img src="${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <a href="${member.website}" target="_blank" class="external-link-button">To Know More</a>
            </div>
        `;
        
    }
    
    function generateMemberList(member) {
        return `
            <div class="member-list">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership_level}</p>
                <p>${member.other_info}</p>
            </div>
        `;
    }
    
    function generateGridHTML() {
        const membersHTML = membersData.map(member => generateMemberCard(member)).join('');
        membersContainer.innerHTML = membersHTML;
    }
    
    function generateListHTML() {
        const membersHTML = membersData.map(member => generateMemberList(member)).join('');
        membersContainer.innerHTML = membersHTML;
        membersContainer.classList.add('list-view'); // Adicione esta linha
    }
    
    gridButton.addEventListener('click', generateGridHTML);
    listButton.addEventListener('click', generateListHTML);
    
    // Inicialmente, carregue a exibição de grade
    generateGridHTML();
});
