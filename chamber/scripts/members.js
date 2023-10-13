const baseURL = "renatasouto.github.io/wdd230/chamber/";

const linksURL = "https://renatasouto.github.io/wdd230/chamber/data/members.json";

document.addEventListener("DOMContentLoaded", function () {
    const membersContainer = document.getElementById("members-container");
    const currentView = localStorage.getItem("currentView") || "grid"; // Padrão para visualização em grade

    // Carrega dados dos membros a partir do arquivo JSON
    fetch(linksURL)
        .then(response => response.json())
        .then(data => {
            const members = data.members;

            // Itera sobre os membros e cria elementos HTML para exibi-los
            members.forEach(member => {
                const memberDiv = document.createElement("div");
                memberDiv.classList.add("member-card"); // Adicione uma classe para estilização (opcional)

                // Adicione classes de visualização com base na configuração atual
                memberDiv.classList.add(currentView === "grid" ? "grid-view" : "list-view");

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

    // Função para alternar entre a visualização em grade e a lista
    function toggleView(view) {
        const memberCards = document.querySelectorAll(".member-card");

        memberCards.forEach(memberCard => {
            if (view === "grid") {
                memberCard.classList.add("grid-view");
                memberCard.classList.remove("list-view");
            } else if (view === "list") {
                memberCard.classList.add("list-view");
                memberCard.classList.remove("grid-view");
            }
        });

        // Salvar a configuração atual no armazenamento local
        localStorage.setItem("currentView", view);
    }

    // Adicione um manipulador de evento ao botão de visualização em grade
    document.getElementById("grid-view").addEventListener("click", () => {
        if (currentView !== "grid") {
            toggleView("grid");
            currentView = "grid";
        }
    });

    // Adicione um manipulador de evento ao botão de visualização em lista
    document.getElementById("list-view").addEventListener("click", () => {
        if (currentView !== "list") {
            toggleView("list");
            currentView = "list";
        }
    });
});

  