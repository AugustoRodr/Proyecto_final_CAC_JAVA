document.querySelector("#open-login").addEventListener("click",function(){
    const conten=document.querySelector(".cont-formulario")
    conten.classList.toggle("ocultar")
    // console.log(conten)
})

document.querySelector(".cerrar-form").addEventListener("click",function(){
    const conten=document.querySelector(".cont-formulario")
    conten.classList.toggle("ocultar")
})