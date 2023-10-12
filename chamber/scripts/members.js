const baseURL = "renatasouto.github.io/wdd230/chamber/";

const linksURL = "https://renatasouto.github.io/wdd230/data/members.json";

document.addEventListener("DOMContentLoaded", function () {
    const membersContainer = document.getElementById("members-container");
  
    // Carrega dados dos membros a partir do arquivo JSON
    fetch("../chamber/data/members.json")
      .then(response => response.json())
      .then(data => {
        const members = data.members;
  
        // Itera sobre os membros e cria elementos HTML para exibi-los
        members.forEach(member => {
          const memberDiv = document.createElement("div");
          memberDiv.classList.add("member-card"); // Adicione uma classe para estilização (opcional)
          memberDiv.innerHTML = `
            <h2>${member.name}</h2>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membership_level}</p>
            <p>Other Info: ${member.other_info}</p>
          `;
  
          membersContainer.appendChild(memberDiv);
        });
      })
      .catch(error => console.error(error));
  });
  