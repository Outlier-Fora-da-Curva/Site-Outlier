
///////////////////////////////////////////////////////////////
let slideIndex = 0;
let grupoTamanho = 5;
let slidesGrupos = [];

window.addEventListener("load", setupSlides);
window.addEventListener("resize", setupSlides);

function setupSlides() {
  const container = document.querySelector(".cardsEquipe");
  const todosCards = Array.from(container.querySelectorAll(".slides"));

  // Limpa container
  container.innerHTML = "";

  // Define quantos cards cabem na tela
  const width = window.innerWidth;
  if (width <= 500) grupoTamanho = 1;
  else if (width <= 800) grupoTamanho = 2;
  else if (width <= 1200) grupoTamanho = 3;
  else grupoTamanho = 5;

  // Agrupa os cards
  slidesGrupos = [];
  for (let i = 0; i < todosCards.length; i += grupoTamanho) {
    const grupoDiv = document.createElement("div");
    grupoDiv.classList.add("slide-group");
    grupoDiv.style.display = "none"; // esconde por padrão

    for (let j = i; j < i + grupoTamanho && j < todosCards.length; j++) {
      grupoDiv.appendChild(todosCards[j]);
    }

    container.appendChild(grupoDiv);
    slidesGrupos.push(grupoDiv);
  }

  slideIndex = 0;
  showSlides(slideIndex);
}

// Botões de avançar e voltar
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex < 0) slideIndex = slidesGrupos.length - 1;
  if (slideIndex >= slidesGrupos.length) slideIndex = 0;
  showSlides(slideIndex);
}

function showSlides(n) {
  for (let i = 0; i < slidesGrupos.length; i++) {
    slidesGrupos[i].style.display = i === n ? "flex" : "none";
  }
}