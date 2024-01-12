let jugador = []
let computadora = []
let opciones = ["piedra 🪨", "papel 📋", "tijera ✂️"]

let botonoes = document.querySelectorAll(".accion")
let contadorJugador = document.getElementById("contador_jugador")
let contadorComputadora = document.getElementById("contador_computadora")
let resultadoFinal = document.querySelector(".contenedor__resultado")
let resultado1 = document.querySelector(".resultado1")
let resultado2 = document.querySelector(".resultado2")
let mensaje = document.querySelector(".mensaje__ganadaro")
let primero = document.querySelector(".primero")
let contenedorPadre = document.querySelector(".contenedor__final")
botonoes.forEach(el => {
    el.addEventListener("click", function(){
        let opcionJugador = el.dataset.valor
        let opcionComputadora = Math.floor(Math.random() * 3) + 1;
        comparacion(opcionJugador, opcionComputadora);
        ganador(jugador.length, computadora.length);
    })
});

// 1 = piedra.
// 2 = papel.
// 3 = tijera.

function comparacion(jugadorJuego,computadoraJuego){

    if( jugadorJuego == 1 && computadoraJuego == 1 || 
        jugadorJuego == 2 && computadoraJuego == 2 || 
        jugadorJuego == 3 && computadoraJuego == 3 ){
        
            // empate 
        mostrarModal(resultado1, resultado2, opciones[jugadorJuego - 1], opciones[computadoraJuego -1])
        mensaje.innerText = "¡Empate! 😱"
    } else if ( jugadorJuego == 1 && computadoraJuego == 3 || 
                jugadorJuego == 2 && computadoraJuego == 1 || 
                jugadorJuego == 3 && computadoraJuego == 2 ){
        
        // gana jugador
        mostrarModal(resultado1, resultado2, opciones[jugadorJuego - 1], opciones[computadoraJuego -1])
        mensaje.innerText = "¡Ganaste un punto! 🔥"
        jugador.push(1)
        contadorJugador.innerText = jugador.length
    } else {

        // gana la computadora
        mostrarModal(resultado1, resultado2, opciones[jugadorJuego - 1], opciones[computadoraJuego -1])
        computadora.push(1)
        contadorComputadora.innerText = computadora.length
        mensaje.innerText = "¡La computadora ganó un punto! 😭"
    }
}

function ganador(a, b) {
    if (a === 5) {
        vaciar();
        primero.innerText = "🔥 ¡Felicitaciones ganaste el juego! 🔥"
    } else if (b === 5) {
        vaciar();
        primero.innerText = "😭 ¡La computadora ganó el juego! 😭"
    }
}

function vaciar() {
    jugador = [];
    computadora = [];
    contadorComputadora.innerText = computadora.length
    contadorJugador.innerText = jugador.length
    contenedorPadre.style.display = "none"
    reiniciar()
}

function mostrarModal(x, y, a, b){
    resultadoFinal.style.display = "block"
    x.innerText = a
    y.innerText = b
}

function reiniciar(){
    let modal = document.querySelector(".guardar__modal")
    let div = document.createElement("div")
    div.setAttribute("class", "d-flex justify-content-center");

    let span = document.createElement("span")
    span.setAttribute("class", "reiniciar");
    span.innerText = "Reiniciar el Juego"

    div.appendChild(span);
    modal.appendChild(div)

    div.addEventListener("click", function(){
        modal.innerHTML = ""
        resultadoFinal.style.display = "none"
        primero.innerText = "El primero en llegar a 5 puntos gana"
        contenedorPadre.style.display = "block"
    })
}

