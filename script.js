function descobrirCavaleiro() {
    const inputData = document.getElementById('dataNascimento').value;
    const divResultado = document.getElementById('resultado');

    if (!inputData) {
        alert("Por favor, insira uma data válida para consultar o oráculo.");
        return;
    }

    // O formato do input date é "YYYY-MM-DD". Vamos quebrar isso.
    const partesData = inputData.split('-');
    const mes = parseInt(partesData[1], 10);
    const dia = parseInt(partesData[2], 10);

    let signo = "";
    let cavaleiro = "";
    let poder = "";

    // Lógica com operadores lógicos && (E) e || (OU)
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "Áries"; cavaleiro = "Mu"; poder = "Extinção Estelar";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "Touro"; cavaleiro = "Aldebaran"; poder = "Grande Chifre";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "Gêmeos"; cavaleiro = "Saga"; poder = "Explosão Galáctica";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "Câncer"; cavaleiro = "Máscara da Morte"; poder = "Ondas do Inferno";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "Leão"; cavaleiro = "Aiolia"; poder = "Cápsula do Poder / Relâmpago de Plasma";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "Virgem"; cavaleiro = "Shaka"; poder = "Tesouro do Céu";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "Libra"; cavaleiro = "Dohko"; poder = "Cólera dos Cem Dragões";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "Escorpião"; cavaleiro = "Milo"; poder = "Agulha Escarlate";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "Sagitário"; cavaleiro = "Aiolos"; poder = "Trovão Atômico";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "Capricórnio"; cavaleiro = "Shura"; poder = "Excalibur";
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "Aquário"; cavaleiro = "Camus"; poder = "Execução Aurora";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "Peixes"; cavaleiro = "Afrodite"; poder = "Rosas Diabólicas Reais";
    }

    // Output: Exibindo dinamicamente na tela
    divResultado.classList.remove('escondido');
    divResultado.innerHTML = `
        <p>Você nasceu sob a constelação de <strong>${signo}</strong>.</p>
        <p>Seu protetor é:</p>
        <h2 class="cavaleiro-nome">${cavaleiro} de ${signo}</h2>
        <p>Seu golpe mais letal é a <span class="cavaleiro-poder">"${poder}"</span>.</p>
    `;
}