const form = document.querySelector("#formulario")
let res = document.querySelector("#res")
let imp = document.querySelector("#import")
let urg = document.querySelector("#urgent")
let cir = document.querySelector("#circun")
let nome = document.querySelector("#name")
let email = document.querySelector("#email")
let tex = document.querySelector("#texto")


form.addEventListener('submit', function(e){
    e.preventDefault() 
    
})

function verificar(){
    let resposta = document.querySelector(".resposta")
    resposta.classList.toggle('active')
    
    let quest1 = document.querySelector("#ql1")
    let quest2 = document.querySelector("#ql2")
    let quest3 = document.querySelector("#ql3")
    let quest4 = document.querySelector("#ql4")
    let quest5 = document.querySelector("#ql5")
    let quest6 = document.querySelector("#ql6")
    let quest7 = document.querySelector("#ql7")
    let quest8 = document.querySelector("#ql8")
    let quest9 = document.querySelector("#ql9")
    let quest10 = document.querySelector("#ql10")
    let quest11 = document.querySelector("#ql11")
    let quest12 = document.querySelector("#ql12")
    let quest13 = document.querySelector("#ql13")
    let quest14 = document.querySelector("#ql14")
    let quest15 = document.querySelector("#ql15")
    let quest16 = document.querySelector("#ql16")
    let quest17 = document.querySelector("#ql17")
    let quest18 = document.querySelector("#ql18")

    let q1 = Number(quest1.value)
    let q2 = Number(quest2.value)
    let q3 = Number(quest3.value)
    let q4 = Number(quest4.value)
    let q5 = Number(quest5.value)
    let q6 = Number(quest6.value)
    let q7 = Number(quest7.value)
    let q8 = Number(quest8.value)
    let q9 = Number(quest9.value)
    let q10 = Number(quest10.value)
    let q11 = Number(quest11.value)
    let q12 = Number(quest12.value)
    let q13 = Number(quest13.value)
    let q14 = Number(quest14.value)
    let q15 = Number(quest15.value)
    let q16 = Number(quest16.value)
    let q17 = Number(quest17.value)
    let q18 = Number(quest18.value)

    const circunstancial = q1+q3+q6+q9+q12+q15
    const importante = q4+q7+q10+q11+q14+q17
    const urgente = q2+q5+q8+q13+q16+q18

    const total = importante+urgente+circunstancial
    res.innerHTML = `A soma dos pontos foi ${total}`

    const circ = (circunstancial*100)/total
    const impo = (importante*100)/total
    const urge = (urgente*100)/total
    
    res.innerHTML = `Olá, ${nome.value}!`

    cir.innerHTML += `<br><strong>${circ.toFixed(1)}%</strong> <br> Circunstancial`
    imp.innerHTML += `<br><strong>${impo.toFixed(1)}%</strong> <br> Importante`
    urg.innerHTML += `<br><strong>${urge.toFixed(1)}%</strong> <br> Urgente`
    tex.innerHTML += `<p>Após analisar o seu resultado talvez se    dê conta que precisa aprender um método de produtividade, aprender a planejar seu tempo da forma correta, a priorizar o que deve ser feito, usar a tecnologia a seu favor, aprender como ter mais foco e energia no no seu dia. Recomendamos a leitura do livro, A Tríade do Tempo, que com certeza dará diversas estratégias para começar a mudar esse padrão.</p>
    <p>Também, desenvolva uma atitude mental diária de evolução, mudando o padrão de correria para o padrão de andar. Andar na velocidade do que é importante, andar aproveitando aquilo que você conquistou, andar realizando as mudanças que precisa para ter uma vida com mais equilíbrio e resultados. Um bom começo é reservar um tempo para responder essas perguntas</p>`

}