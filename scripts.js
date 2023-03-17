let turnoJogador = "X"

const encontrarBotao = botaoNumero => {
    return document.getElementById(`b${botaoNumero}`)
}

const encontrarGanhador = turnoJogador => {
    return document.getElementById(`pontuacao-jogador${turnoJogador}`)
}

function limparDisplay() {
    for (let i = 1; i <= 9; i++) {
        encontrarBotao(i).innerHTML = ""
    }
    return
}

function verificarEmpate() {
    const empates = document.getElementById('empates-span')

    let jogados = ""

    for (let i = 1; i <= 9; i++) {
        if (encontrarBotao(i).innerHTML !== "") jogados += `${i}`
    }

    if (jogados == "123456789") {
        empates.innerHTML = Number(empates.innerHTML) + 1
        alert('O jogo empatou! Nenhum jogador recebeu ponto!')
    }

    return
}

function reiniciarJogo() {
    limparDisplay()

    document.getElementById(`pontuacao-jogadorX`).innerHTML = "0"
    document.getElementById(`pontuacao-jogadorO`).innerHTML = "0"
    document.getElementById(`empates-span`).innerHTML = "0"

    return
}

function verificarVazios() {
    for (let i = 1; i <= 9; i++) {
        if (encontrarBotao(i).innerHTML == "") {
            encontrarBotao(i).innerHTML = "-"
        }
    }
}

function verificarVitoria() {
    const conjuntos = ['123', '456', '789', '147', '258', '369', '159', '357']

    const sequenciaTotal = "123456789"
    
    let sequencia = ""

    for (const jogada of sequenciaTotal) {
        const botao = encontrarBotao(jogada)
        
        botao.textContent == turnoJogador ? sequencia += jogada : ''
    }

    for (const jogadaVitoria of conjuntos) {
        if (sequencia.includes(jogadaVitoria)) {
            const ganhador = encontrarGanhador(turnoJogador)

            ganhador.innerHTML = Number(ganhador.innerHTML) + 1
            alert(`Jogador ${turnoJogador} ganhou !`)
            verificarVazios()
            return
        }
    }

    verificarEmpate()

    return
}

function fazerJogada(bN) {
    const botao = encontrarBotao(bN)
    
    if (botao.textContent != "") return alert('Não é possivel jogar aqui')
    
    botao.innerHTML = turnoJogador

    verificarVitoria(bN)

    turnoJogador == "X" ? turnoJogador = "O" : turnoJogador = "X"

    return
}