document.querySelector("#open-login").addEventListener("click",function(){
    const conten=document.querySelector(".cont-formulario")
    conten.classList.toggle("ocultar")
    // console.log(conten)
})

document.querySelector(".cerrar-form").addEventListener("click",function(){
    const conten=document.querySelector(".cont-formulario")
    conten.classList.toggle("ocultar")
})

document.querySelector(".dropdown-item.cardUserSalir").addEventListener("click",function(){
    const user=document.querySelector(".nav-item.content-cardUser");
    const login=document.querySelector(".nav-item.content-login");

    user.classList.toggle("hiddenUser");
    login.classList.toggle("hiddenUser");
})

// document.querySelector(".linkRegistrarme").addEventListener("click",function(){
//     const formulario= document.querySelector(".formulario-login");
// })



/**/
// Proceso de validacion del login
async function AperturaData(email, password){
    // descomentar antes hacer push
    const response= await fetch("https://raw.githubusercontent.com/AugustoRodr/Proyecto_final_CAC_JAVA/master/data/login_test.json")

    // const response= await fetch("../data/login_test.json")
    const cuentas= await response.json()
    // console.log(cuentas.accounts)

    let userName=ValidacionLogin(email,password,cuentas.accounts)
    // console.log(userName)
    if(userName){
        // alert("Ingreso a la cuenta.")
        const closeVentana=document.querySelector(".cont-formulario");
        const cardLogin=document.querySelector(".nav-item.content-login")
        const cardUser=document.querySelector(".nav-item.content-cardUser")
        const card_user=document.querySelector(".nav-link.active.card-user");

        // oculto y muestro los links segun si es valido o no el usuario
        if(!cardLogin.classList.contains("hiddenUser") && cardUser.classList.contains("hiddenUser")){
            cardLogin.classList.toggle("hiddenUser")
            cardUser.classList.toggle("hiddenUser")
        }
        // modifico el contenido de targeta usuario
        card_user.childNodes[1].nodeValue=userName;

        // cierro la ventana de login
        closeVentana.classList.toggle("ocultar");

        // console.log(card_user.text)
        // console.log(userName)
    }else{
        alert("No se pudo ingresar")

    }

}

function ValidacionLogin(email,password,data){
    // console.log(typeof(data),"longitud de data: "+data.length)
    for(let i=0;i<data.length;i++){
        if(email==data[i].email && password==data[i].password){
            return data[i].name;
        }
    }
    return false;
}

const form= document.querySelector(".formulario-login")

form.addEventListener("submit",function(event){
    event.preventDefault();
    const email= form.querySelector(".email-form")
    const password=document.querySelector(".password-form")
    
    // console.log(email,password);
    AperturaData(email.value,password.value)

    email.value="";
    password.value="";
})

// cambiar el contenido del form
function changeForm(val){
    const formulario=document.querySelector("#signIn-signUp");

    if(val==1){
        formulario.innerHTML=`
        <h2>Registrarse</h2>
        <div class="form-floating mb-3">
          <input type="text" class="form-control email-form" placeholder="name@example.com" required>
          <label for="floatingInput">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control email-form" placeholder="name@example.com" required>
          <label for="floatingInput">Apellido</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control email-form" id="floatingInput" placeholder="name@example.com" required>
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control password-form" id="floatingPassword" placeholder="Password" required>
          <label for="floatingPassword">Contraseña</label>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="submit" class="btn btn-primary">Registrarme</button>
          <button type="reset" class="btn btn-primary">Limpiar</button>
        </div>
        <span class="linkRegistrarme"><a onclick="changeForm(0)" href="#">&#8592; Ingresar</a></span>
        `;
    }

    if(val==0){
        formulario.innerHTML=`
        <h2>Iniciar Sesion</h2>
        <div class="form-floating mb-3">
          <input type="email" class="form-control email-form" id="floatingInput" placeholder="name@example.com" required>
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control password-form" id="floatingPassword" placeholder="Password" required>
          <label for="floatingPassword">Password</label>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="submit" class="btn btn-primary">Ingresar</button>
          <button type="reset" class="btn btn-primary">Limpiar</button>
        </div>
        <span class="linkRegistrarme"><a onclick="changeForm(1)" href="#">Registrarme &#8594;</a></span>
        `
    }
}
