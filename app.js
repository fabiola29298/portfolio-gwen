


let menuMobile = document.querySelector('#navbar-menu');
// const optionMenu = document.querySelector('#opcion1');
const iconoMenu  = document.getElementById('icono-menu');
let flag=false;
menuMobile.innerHTML = '';

iconoMenu.addEventListener('click', () => {
  // console.log('object');
  if(!flag){
    menuMobile.innerHTML = `
    <div id="menu-mobile">
      <div div class= "content-menu" >
      <a id="opcion1" class="option-menu" href="#home"> Home</a>
      <a id="opcion2" class="option-menu" href="#projects"> Proyectos</a>
      <a id="opcion3" class="option-menu" href="#brands"> Testimonios</a>
      <a id="opcion4" class="option-menu" href="#contacts"> Contacto</a>
    </div ></div >
    `;
    flag = true;
    iconoMenu.src = "./img/salir.svg";
  }
  else{
    menuMobile.innerHTML = ``;
  }

});

// optionMenu.addEventListener('click', () => {
//   console.log('object');
//   // menuMobile.innerHTML = `
// });



