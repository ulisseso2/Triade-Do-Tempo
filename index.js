const form = document.querySelector("#formulario")
let res = document.querySelector("#res")
let nome = document.querySelector("#name")
let email = document.querySelector("#email")

form.addEventListener('submit', function(e){
    e.preventDefault()
    

    res.innerHTML = `Olá ${nome.value}! seu e-mail é ${email.value}`
})







