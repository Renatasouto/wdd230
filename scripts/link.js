const baseURL = "renatasouto.github.io/wdd230/";

const linksURL = "https://renatasouto.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  function displayLinks(weeks) {
    const linksContainer = document.getElementById('links-container');
    
    weeks.forEach((week) => {
      const weekDiv = document.createElement('div');
      weekDiv.className = 'week';
      
      const weekHeader = document.createElement('h2');
      weekHeader.textContent = week.week;
      
      const linksList = document.createElement('ul');
      
      week.links.forEach((link) => {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.title;
        listItem.appendChild(linkElement);
        linksList.appendChild(listItem);
      });
      
      weekDiv.appendChild(weekHeader);
      weekDiv.appendChild(linksList);
      
      linksContainer.appendChild(weekDiv);
    });
  }
  
  getLinks();
  

