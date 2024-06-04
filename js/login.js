document.querySelector("#open-login").addEventListener("click",function(){
    const conten=document.querySelector(".cont-formulario")
    conten.classList.toggle("ocultar")
    // console.log(conten)
})

document.querySelector(".cerrar-form").addEventListener("click",function(){
    const conten=document.querySelector(".cont-formulario")
    conten.classList.toggle("ocultar")
})
/**/
// Proceso de validacion del login
async function AperturaData(email, password){
    const response= await fetch("../data/login_test.json")
    const cuentas= await response.json()
    // console.log(cuentas.accounts)

    let valido=ValidacionLogin(email,password,cuentas.accounts)
    console.log(valido)
    if(valido){
        alert("Ingreso a la cuenta.")
    }else{
        alert("No se pudo ingresar")

    }

}

function ValidacionLogin(email,password,data){
    // console.log(typeof(data),"longitud de data: "+data.length)
    for(let i=0;i<data.length;i++){
        if(email==data[i].email && password==data[i].password){
            return true
        }
    }
    return false;
}

const form= document.querySelector(".formulario-login")

form.addEventListener("submit",function(event){
    event.preventDefault();
    const email= form.querySelector(".email-form").value
    const password=document.querySelector(".password-form").value
    
    // console.log(email,password);
    AperturaData(email,password)
})
