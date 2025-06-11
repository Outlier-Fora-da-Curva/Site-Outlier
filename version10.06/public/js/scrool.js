// Efeito scroll
window.revelar = ScrollReveal({reset:true}) // Resetar os elementos do site


// Inicio - 1 
// Sobre nós - 2
// Projetos - 3 


revelar.reveal('.lado2', {
    duration: 1500, 
    distance: '60px',
    delay: 300,
    origin: 'bottom'
})



// Equipe - 4
revelar.reveal('.efeito4a', {
    duration: 2000, 
    distance: '80px',
    delay: 350,
    origin: 'left'
})

revelar.reveal('.efeito4b', {
    duration: 2000, 
    distance: '80px',
    delay: 350,
    origin: 'bottom'
})


// Parceiros - 5
revelar.reveal('.efeito-carrossel', {
    duration: 1900, 
    distance: '90px',
    delay: 600,
    origin: 'left'
})
   