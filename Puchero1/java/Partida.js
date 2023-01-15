





function jugar(){

    let puchero=new Pucherin(5);//se seleciona el numero de jugadores 
    console.log("empieza la partida!!!!!!");
    puchero.repartirFichas();
    puchero.imprimir();
    puchero.imprimirJugadores();
    while (puchero.comprobarVictoria()!=1) {
        puchero.pasarTurno();
        puchero.tirarDadoJugador();
        puchero.rellenarPuchero();
        puchero.imprimir();
        puchero.imprimirJugadores();
        puchero.comprobarVictoria();
        
    }
    puchero.mensaje();
}
jugar();










