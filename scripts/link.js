const baseURL = "renatasouto.github.io/wdd230/";

const linksURL = "https://renatasouto.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  console.log('a'+response)
  const data = await response.json();
  console.log('b'+data)
  console.log('c'+data.weeks)
  displayLinks(data.weeks);
}
{/* <li>Week 01: 
    <a class="colorLink" href="">Layout</a> | 
    <a class="colorLink" href="https://renatasouto.github.io/wdd230/week01/media-query.html">Media Query</a> | 
    <a class="colorLink" href="https://codepen.io/Renatasouto/pen/RwEVmer.html">JS Pen</a> | 
    <a class="colorLink" href="https://renatasouto.github.io/wdd230/week01/chamber-site-plan.html">Chamber Site Plan</a>
</li> */}

function displayLinks(weeks) {
  const ulContainer = document.getElementById('ul-container');
  console.log(weeks)
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

  

