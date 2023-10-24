document.addEventListener("DOMContentLoaded", function() {
    // Função para verificar o dia da semana e exibir/ocultar o banner
    function displayBanner() {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 (domingo) a 6 (sábado)

        if (dayOfWeek >= 1 && dayOfWeek <= 3) {
            // Mostra o banner nas segundas, terças e quartas
            document.getElementById("banner").style.display = "block";
        } else {
            // Oculta o banner nos outros dias
            document.getElementById("banner").style.display = "none";
        }
    }

    // Adiciona um evento de clique para fechar o banner
    document.getElementById("close-banner").addEventListener("click", function() {
        document.getElementById("banner").style.display = "none";
    });

    // Chama a função para exibir ou ocultar o banner com base no dia da semana
    displayBanner();
});

