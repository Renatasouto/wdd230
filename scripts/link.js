const baseURL = "renatasouto.github.io/wdd230/";

const linksURL = "https://renatasouto.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
 
  const data = await response.json();
  
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const ulContainer = document.getElementById('ul-container');
 
  weeks.forEach((week) => {
   
    const listItem = document.createElement('li');
    listItem.textContent = week.week + ': ';

    week.links.forEach((link, linkIndex) => {
      
      const linkElement = document.createElement('a');
      linkElement.className = 'colorLink';
      linkElement.href = link.url;
      linkElement.textContent = link.title;
      
      
      listItem.appendChild(linkElement);
      if (linkIndex < week.links.length - 1) {
        const separator = document.createTextNode(' | ');
        listItem.appendChild(separator);
      }
     
    });
    
    ulContainer.appendChild(listItem);
  });
}

getLinks();

  

