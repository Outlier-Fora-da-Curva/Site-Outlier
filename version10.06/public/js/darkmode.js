//modo dark

const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
    toggleDarkMode();
})


//botão do menu mobile

// function toggleDarkMode() {
  
//     const abrir = document.getElementById("iconAbrir");

//     if (document.body.classList.contains('dark')) {
//         abrir.src = "../img/menu-abertoDark.png";
//     } else {
//         abrir.src = "../img/abrirMenu.png";
//     }

// }