function descobrirCavaleiro() {
    const inputData = document.getElementById('dataNascimento').value;
    const divResultado = document.getElementById('resultado');

    if (!inputData) {
        alert("Por favor, insira uma data válida para consultar o oráculo.");
        return;
    }

    const partesData = inputData.split('-');
    const mes = parseInt(partesData[1], 10);
    const dia = parseInt(partesData[2], 10);

    let signo = "";
    let cavaleiro = "";
    let poder = "";
    let descricao = "";
    let imagem = "";

    // Lógica atualizada com Descrição e Imagem
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "Áries"; cavaleiro = "Mu"; poder = "Extinção Estelar";
        descricao = "O homem que conhece os segredos da restauração das armaduras. Pacífico, mas dono de uma telecinesia formidável.";
        imagem = "https://ovicio.com.br/wp-content/uploads/2023/04/20230428-ovicio-os-cavaleiros-do-zodiaco-10-fatos-mu-de-aries.jpg";
    
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "Touro"; cavaleiro = "Aldebaran"; poder = "Grande Chifre";
        descricao = "O cavaleiro mais forte e resistente fisicamente do Santuário, possuindo um ataque letal de saque rápido incomparável.";
        imagem = "https://ovicio.com.br/wp-content/uploads/2023/04/20230430-ovicio-os-cavaleiros-do-zodiaco-aldebaran-de-touro.jpg";
    
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "Gêmeos"; cavaleiro = "Saga"; poder = "Explosão Galáctica";
        descricao = "O homem de dupla personalidade que dominou o Santuário. Seu poder é tão imenso que é capaz de destruir galáxias.";
        imagem = "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2023/04/divulgacao-saga-reproducao-scaled.jpg";
    
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "Câncer"; cavaleiro = "Máscara da Morte"; poder = "Ondas do Inferno";
        descricao = "Sádico e implacável, ele possui a habilidade de enviar a alma de seus oponentes diretamente para o submundo.";
        imagem = "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2023/04/divulgacao-mascara-da-morte-reproducao-scaled.jpg";
    
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "Leão"; cavaleiro = "Aiolia"; poder = "Cápsula do Poder / Relâmpago de Plasma";
        descricao = "O cavaleiro cujo punho rasga os céus. Íntegro e corajoso, dispara centenas de golpes à velocidade da luz.";
        imagem = "https://ovicio.com.br/wp-content/uploads/2023/05/20230502-ovicio-os-cavaleiros-do-zodiaco-aiolia-de-leao.jpg";
    
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "Virgem"; cavaleiro = "Shaka"; poder = "Tesouro do Céu";
        descricao = "Considerado o homem mais próximo de Deus. Priva-se da própria visão para acumular um cosmo infinito e inabalável.";
        imagem = "https://ovicio.com.br/wp-content/uploads/2023/05/20230504-ovicio-shaka-de-virgem-os-cavaleiros-do-zodiaco.jpg";
    
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "Libra"; cavaleiro = "Dohko"; poder = "Cólera dos Cem Dragões";
        descricao = "O respeitado Mestre Ancião, guardião das armas do zodíaco e um dos raros sobreviventes da última Guerra Santa.";
        imagem = "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2023/04/divulgacao-dohko-reproducao-scaled.jpg";
    
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "Escorpião"; cavaleiro = "Milo"; poder = "Agulha Escarlate";
        descricao = "Suas agulhas são mortais e torturantes, dando ao inimigo a difícil escolha entre a rendição absoluta ou a morte.";
        imagem = "https://ovicio.com.br/wp-content/uploads/2023/05/20230505-ovicio-milo-de-escorpiao-os-cavaleiros-do-zodiaco.jpg";
    
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "Sagitário"; cavaleiro = "Aiolos"; poder = "Trovão Atômico";
        descricao = "O herói lendário que sacrificou sua vida para salvar a bebê Athena. Seu espírito de justiça ainda vive em sua armadura.";
        imagem = "https://i.pinimg.com/736x/55/61/ed/5561edd1e6d9b36a9a930b1fa4b68a4f.jpg";
    
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "Capricórnio"; cavaleiro = "Shura"; poder = "Excalibur";
        descricao = "Conhecido como o cavaleiro mais leal a Athena, seus braços e pernas são afiados como a espada sagrada Excalibur.";
        imagem = "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2023/04/divulgacao-shura-reproducao-scaled.jpg";
    
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "Aquário"; cavaleiro = "Camus"; poder = "Execução Aurora";
        descricao = "O mago da água e do gelo. Sob uma postura fria, esconde um coração quente. Capaz de atingir o zero absoluto.";
        imagem = "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2023/04/divulgacao-camus-reproducao-scaled.jpg";
    
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "Peixes"; cavaleiro = "Afrodite"; poder = "Rosas Diabólicas Reais";
        descricao = "O guerreiro cuja beleza transcende o campo de batalha. Usa rosas mortais para aniquilar qualquer um que cruze seu caminho.";
        imagem = "https://ovicio.com.br/wp-content/uploads/2023/05/20230509-peixes.jpg";
    }

    // Output atualizado: Injetando a imagem e a descrição no HTML
    divResultado.classList.remove('escondido');
    divResultado.innerHTML = `
        <p>Você nasceu sob a constelação de <strong>${signo}</strong>.</p>
        <p>Seu protetor é:</p>
        <img src="${imagem}" alt="${cavaleiro} de ${signo}" class="cavaleiro-img">
        <h2 class="cavaleiro-nome">${cavaleiro} de ${signo}</h2>
        <p class="cavaleiro-descricao">"${descricao}"</p>
        <p>Seu golpe mais letal é a <span class="cavaleiro-poder">${poder}</span>.</p>
    `;
}