// Selecione o botão existente de alternância de tema (com ícones de sol e lua)
const themeButton = document.getElementById('theme-button');
const main = document.querySelector('main');
const body = document.body;

// Verifique o tema atual e configure os ícones adequadamente
if (localStorage.getItem('theme') === 'dark') {
  main.classList.add('dark-mode'); // Aplicar classe dark-mode apenas ao <main>
  themeButton.innerHTML = '<i class="bi bi-sun"></i>'; // Use o ícone do sol
} else {
  themeButton.innerHTML = '<i class="bi bi-moon"></i>'; // Use o ícone da lua
}

// Adicione um ouvinte de evento de clique ao botão de alternância de tema
themeButton.addEventListener('click', () => {
  // Alternar entre os temas para o <main> apenas
  main.classList.toggle('dark-mode');

  // Verificar se o tema atual é escuro e atualizar o botão com o ícone apropriado
  if (main.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeButton.innerHTML = '<i class="bi bi-sun"></i>'; // Use o ícone do sol
  } else {
    localStorage.setItem('theme', 'light');
    themeButton.innerHTML = '<i class="bi bi-moon"></i>'; // Use o ícone da lua
  }
});




