class Jugador{
    numeroJugador;
    numeroFichas;
   
    constructor(numeroJugador,numeroFichas){
       this.numeroJugador=numeroJugador;
       this.numeroFichas=numeroFichas;
    }
 
   
 
    imprimirJugador(){//para hacer pruebas ,comprobar que el jugador no sea nulo etc...
       console.log(Jugador.numeroJugador);
       console.log(Jugador.numFichas);
    }
    
    tirarDado(){//tirar el dado que luego en la clase del puchero lo llamo en la funcion tirar dado jugador dado que necesito el control del turno(que esta en la clase puchero) para saber que jugador tira los dados  
        let num=Math.floor(Math.random() * (15 - 2));
        if(num==13||num==14||num==0||num==1){
            this.tirarDado();
        }else{
            return num;
            
        }
        
    }
 
    restarFicha(){
       this.numeroFichas--;
       return this.numeroFichas;
    }
 
 
 
 }
 
 class Casilla{

    fichas=0;
    maxFichas;

    constructor(maxFichas){
        this.fichas=0;
        this.maxFichas = maxFichas;
    }

    rellenarCasilla(){
        this.fichas++;
    }
 

}

class Pucherin{

    constructor(jugador){
        this.numeroDeJugadores=jugador;
        this.dado=0;
        this.turno=0;
        this.numJugadores=new Array(this.numeroDeJugadores);
        this.puchero2=new Casilla(2);
        this.puchero3=new Casilla(3); 
        this.puchero4=new Casilla(4);
        this.puchero5=new Casilla(5);
        this.puchero6=new Casilla(6);
        this.puchero7=new Casilla(7);
        this.puchero8=new Casilla(8);
        this.puchero9=new Casilla(9);
        this.puchero10=new Casilla(10);
        this.puchero11=new Casilla(11);
    }

    repartirFichas(){//repartir las fichas en funcion de los jugadores que hay para poder imprimir su numero de jugador y numero de fichas
        let jug1;
        let jug2;
        let jug3;
        let jug4;
        let jug5;
        switch(this.numJugadores.length){
            case 2:
                 jug1=new Jugador(1,25);
                 jug2=new Jugador(2,25);
                this.numJugadores.push(jug1,jug2);
                break;
            case 3:
                 jug1=new Jugador(1,16);
                 jug2=new Jugador(2,16);
                 jug3=new Jugador(3,16);
                 this.numJugadores.push(jug1,jug2,jug3);
                break;
            case 4:
                jug1=new Jugador(1,12);
                jug2=new Jugador(2,12);
                jug3=new Jugador(3,12);
                jug4=new Jugador(4,12);
                this.numJugadores.push(jug1,jug2,jug3,jug4);
                break;
            case 5:
                jug1=new Jugador(1,10);
                jug2=new Jugador(2,10);
                jug3=new Jugador(3,10);
                jug4=new Jugador(4,10);
                jug5=new Jugador(5,10);
                this.numJugadores.push(jug1,jug2,jug3,jug4,jug5);
                break;    
        }
     } 

    imprimir() {//IMPRIME EL ESTADO ACTUAL DEL POZO

        console.log(`POZO 2=> ${this.puchero2.fichas} fichas`);
        
     
        console.log(" POZO 3=> "+ this.puchero3.fichas+" fichas");

       
        console.log(" POZO 4=> "+ this.puchero4.fichas+" fichas");

       
        console.log(" POZO 5=> "+ this.puchero5.fichas+" fichas");

       
        console.log(" POZO 6=> "+ this.puchero6.fichas+" fichas");

       
        console.log(" POZO 7=> "+ this.puchero7.fichas+" fichas");

      
        console.log(" POZO 8=> "+ this.puchero8.fichas+" fichas");

       
        console.log(" POZO 9=> "+ this.puchero9.fichas+" fichas");

      
        console.log(" POZO 10=> "+ this.puchero10.fichas+" fichas");

       
        console.log(" POZO 11=> "+ this.puchero11.fichas+" fichas");

    }


    pasarTurno(){
        this.turno++;
        if(this.turno>this.numeroDeJugadores){
            this.turno=1;
        }
        
        return this.turno;

    }
     
    tirarDadoJugador(){
        
       this.numJugadores.forEach(jugador => {
        if(jugador.numeroFichas==0){
            if(jugador.numeroJugador==this.turno){
                console.log("Jugador "+this.turno+" sin fichas");
            this.dado=jugador.tirarDado();
            }
        }else{
            if(jugador.numeroJugador==this.turno){
                this.dado=jugador.tirarDado();
                    jugador.restarFicha();
                
                
            }
        }
        
       });  
        console.log("Jugador "+this.turno+" ha sacado "+this.dado);

    }
  
    imprimirJugadores(){
        for(let i=0;i<this.numJugadores.length;i++){
           console.log(this.numJugadores[i]);
        }
    }

    rellenarPuchero(){
        switch(this.dado){
            case 2:
                this.numJugadores.forEach(jugador => {
                    if(jugador.numeroFichas!=0&&jugador.numeroJugador==this.turno){
                        this.puchero2.rellenarCasilla();
                        if(this.puchero2.fichas==this.puchero2.maxFichas ){

                                this.puchero2.fichas=0;
                                jugador.numeroFichas=jugador.numeroFichas+this.puchero2.maxFichas;
                            }
                    
                    }   
                 });
                break;
            case 3:
                this.numJugadores.forEach(jugador => {
                    if(jugador.numeroFichas!=0&&jugador.numeroJugador==this.turno){
                        this.puchero3.rellenarCasilla();
                        if(this.puchero3.fichas==this.puchero3.maxFichas ){
                                this.puchero3.fichas=0;
                                jugador.numeroFichas=jugador.numeroFichas+this.puchero3.maxFichas;
                            } 
                    }   
                 });
                break;
            case 4:
                this.numJugadores.forEach(jugador => {
                    if(jugador.numeroFichas!=0&&jugador.numeroJugador==this.turno){
                        this.puchero4.rellenarCasilla();
                        if(this.puchero4.fichas==this.puchero4.maxFichas ){
                                this.puchero4.fichas=0;
                                jugador.numeroFichas=jugador.numeroFichas+this.puchero4.maxFichas;
                        }
                    }   
                 });
                break;
            case 5: 
                this.numJugadores.forEach(jugador => {
                    if(jugador.numeroFichas!=0&&jugador.numeroJugador==this.turno){
                        this.puchero5.rellenarCasilla();
                        if(this.puchero5.fichas==this.puchero5.maxFichas){
                                this.puchero5.fichas=0;
                                jugador.numeroFichas=jugador.numeroFichas+this.puchero5.maxFichas;
                        }
                    }   
                 });
                break;
            case 6:
                this.numJugadores.forEach(jugador => {
                    if(jugador.numeroFichas!=0&&jugador.numeroJugador==this.turno){
                        this.puchero6.rellenarCasilla();
                        if(this.puchero6.fichas==this.puchero6.maxFichas ){
                                this.puchero6.fichas=0;
                                jugador.numeroFichas=jugador.numeroFichas+this.puchero6.maxFichas;
                        }
                    }   
                 });
                break;
            case 7:
                this.numJugadores.forEach(jugador => {
                    if(this.turno==jugador.numeroJugador&& jugador.numeroFichas!=0){
                        this.puchero7.rellenarCasilla();
                        this.puchero7.maxFichas++;
                    }
                });
                break;
            case 8:
                this.numJugadores.forEach(jugador => {
                    if(jugador.numeroFichas!=0&&jugador.numeroJugador==this.turno){
                        this.puchero8.rellenarCasilla();
                        if(this.puchero8.fichas==this.puchero8.maxFichas ){
                                this.puchero8.fichas=0;
                                jugador.numeroFichas=jugador.numeroFichas+this.puchero8.maxFichas;
                        }
                    }   
                 });
                break;
            case 9:
                this.numJugadores.forEach(jugador => {
                    if(jugador.numeroFichas!=0&&jugador.numeroJugador==this.turno){
                        this.puchero9.rellenarCasilla();
                        if(this.puchero9.fichas==this.puchero9.maxFichas ){
                                this.puchero9.fichas=0;
                                jugador.numeroFichas=jugador.numeroFichas+this.puchero9.maxFichas;
                        }
                    }   
                 });
                break;
            case 10:
                this.numJugadores.forEach(jugador => {
                    if(jugador.numeroFichas!=0&&jugador.numeroJugador==this.turno){
                        this.puchero10.rellenarCasilla();
                        if(this.puchero10.fichas==this.puchero10.maxFichas ){
                                this.puchero10.fichas=0;
                                jugador.numeroFichas=jugador.numeroFichas+this.puchero10.maxFichas;
                        }
                    }   
                 });
                break;
            case 11:
                this.numJugadores.forEach(jugador => {
                    if(jugador.numeroFichas!=0&&jugador.numeroJugador==this.turno){
                        this.puchero11.rellenarCasilla();
                        if(this.puchero11.fichas==this.puchero11.maxFichas ){
                                this.puchero11.fichas=0;
                                jugador.numeroFichas=jugador.numeroFichas+this.puchero11.maxFichas;
                        }
                    }   
                 });
                break;
            case 12:
                this.numJugadores.forEach(jugador => {
                    if( this.turno==jugador.numeroJugador){
                       jugador.numeroFichas=jugador.numeroFichas+this.puchero7.fichas;
                    }
                });
                break;                                      
        }
    }

    comprobarFichasVacias(){
        let cont =0;
        this.numJugadores.forEach(jugador => {
            if(jugador.numeroFichas==0){
                cont++;
            }
        });
        if(cont+1==this.numeroDeJugadores){
            return true;
        }
        return false;
    }

    sumaTotal(){
        let sum =this.puchero2.fichas+this.puchero3.fichas+this.puchero4.fichas+this.puchero5.fichas
        +this.puchero6.fichas+this.puchero7.fichas+this.puchero8.fichas+this.puchero9.fichas
        +this.puchero10.fichas+this.puchero11.fichas;

        return sum;
    }

    comprobarVictoria(){
        let cont=0;
        if(this.dado==12&&this.comprobarFichasVacias()==true){
              this.numJugadores.forEach(jugador => {
                if(this.turno==jugador.numeroJugador){
                    cont++;
                }
              });
        }
        return cont;
    }
    mensaje(){
        this.numJugadores.forEach(jugador => {
        if(this.turno==jugador.numeroJugador){
            jugador.numeroFichas=jugador.numeroFichas+this.sumaTotal();
                    console.log("Fin del juego!!!!");
                    console.log("Gana el jugador "+this.turno+" con "+jugador.numeroFichas+" fichas");
        }
    });
    }

    

   


}