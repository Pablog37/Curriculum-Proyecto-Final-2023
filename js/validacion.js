alert.style.color = 'red';

const form = document.getElementById('form')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const telefono = document.getElementById('telefono')
const enviar = document.getElementById('enviar')

const formIsValid = {
nombre: false,
apellido: false,
email: false,
telefono: false,
}

nombre.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.nombre = true
})

apellido.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.apellido = true
})

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.email = true
})

telefono.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.telefono = true
})

form.addEventListener('submit', (e) => {
e.preventDefault()
validateform()

})

const validateform = () =>{
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('Formulario incompleto')
}

function mensaje()
    alert('Formulario enviado correctamente')

