const prompt = require('prompt-sync')()
let quantidadeSim = 0

console.log(
    'Olá parceiro! Eu sou o comandante Kruger,da INTERPOL e te convoquei para uma missão especial Escolhi você por ser um dos melhores e mais capacitados para cumprir a tarefa!')
    console.log('Preciso que recupere um artefato de inextimavel valor, um peça em Rubi, chamada CORAÇÃO DE DRAGÃO')
    console.log('Ela é datada do seculo IX e pertencia ao império chinês até ser roubada por saqueadores. ','Nosso setor de inteligencia ja identificou o local e o mapeou.' ,'Para sucesso na missão é necessário que cumpra as 5 instruçoes que lhe será passada.' ,'Manteremos contato ao longo da missão!'  ,'Precisamos nos comunicar em códigos'
)

console.log()
console.log('Responda S para SIM')
console.log('Responda N para NÃO')
console.log()

const perguntas = [
    'Você chegou ao local?',
    'Precisamso desativar os alarmes, sem energia, sem alarme! Desativou a caixa de força de energia?',
    'Apesar de termos desativado o alarme, ainda é preciso lidar com a segurança armada. Conseguiu passar pela segurança?',
    'Agora vire a direita e e irá se deparar com uma sala, e ao meio lá estará o magnifico CORAÇÃO DE DRAGÃO. Avistou o Rubi e pegou o Rubi?',
    'Ufa, foi muito tenso até aqui, mas falta pouco para finalizarmos.Vá até o terraço do prédio, e nos aguarde com o helicoptero.Conseguiu chegar ao terraço?',
]

for (let i = 0; i <= 4; i++) {
  resposta = prompt(`${perguntas[i]}: `).toUpperCase()

  if (resposta == 'S') {
    quantidadeSim++
  } else if (resposta != 'N') {
    quantidadeSim = -1
    break
  }
}

console.log()

if (quantidadeSim == 5) {
  console.log(
    `Parabens parceiro! Você é o nosso melhor agente e toda a missão foi concluida com exito!.`
  )
} else if (quantidadeSim == 4) {
  console.log(
    `Ok, conseguiu completar a missão, mas não foi exatamente uma perfeição. Você ja foi melhor companheiro!.`
  )
} else if (quantidadeSim == 3) {
  console.log(
    `Quase conseguiu pegar o Rubi, acabou falhando por pouco.`
  )
} else if (quantidadeSim == 1 || quantidadeSim == 2) {
  console.log(`Você esta aqui, mas cadê o Rubi?.`)
} else if (quantidadeSim >= 0) {
  console.log(`Você falhou miseravelmente.`)
} else {
  console.log(`Resposta Invalida, responda apenas S para sim e N para não`)
}