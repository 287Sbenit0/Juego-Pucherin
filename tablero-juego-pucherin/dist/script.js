document.getElementById("boton").addEventListener("click",tirarDado)

var container = document.querySelector(".box");
const casillas = 9;

// crear puchero
 var puchero = document.createElement('canvas');
 puchero.classList.add('puchero');
 puchero.width = 120;
 puchero.height = 120;
 container.appendChild(puchero);
 pintarPuchero(puchero);
/*<!-- Crear elementos canvas para las casillas -->
<!-- Usar un bucle for para crear los elementos de manera automática -->

<!-- Los canvas se formarán en una elipse  -->*/
for (var i = 0; i < casillas; i++) {
  // Crear un elemento canvas
  var canvas = document.createElement('canvas');
  canvas.classList.add('casilla');
  // Establecer el ancho y alto del canvas en 50 (cada canvas será de 50 x 50)
  canvas.width = 120;
  canvas.height = 120;
  // Añadir el canvas a la página
  container.appendChild(canvas);
  
}

// Obtener una referencia a todos los elementos canvas en la página
var canvases = document.querySelectorAll('.casilla');



// Dibujar una elipse en cada canvas y posicionarlos en una elipse de 
for (var i = 0; i < canvases.length; i++) {
  // Obtener el contexto del canvas en 2D
  var ctx = canvases[i].getContext('2d');

  // Dibujar una elipse en el canvas
  ctx.beginPath();  
  
  //ctx.ellipse(35, 35, 35, 35, 0, 0, 2 * Math.PI);
  //ctx.stroke();

  // Posicionar el canvas en la elipse 
  canvases[i].style.left = Math.cos(2 * Math.PI * i / casillas) * 400 + 400 - 25 + 'px';
  canvases[i].style.top = Math.sin(2 * Math.PI * i / casillas) * 250 + 300  - 25  + 'px';
  
  if (i>4) pintarCasilla(canvases[i],i+3)
  else pintarCasilla(canvases[i],i+2)
}



function pintarCasilla(canvas, fichas, num){
  var ctx = canvas.getContext('2d');
  ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
  ctx.fillStyle = 'green';
  ctx.fill();
  for (var i = 0; i < fichas; i++) {
      // Calcular la posición en el círculo para cada ficha
      var x = Math.cos(2 * Math.PI * i / fichas) * 35 + canvas.width / 2;
      var y = Math.sin(2 * Math.PI * i / fichas) * 35 + canvas.height / 2;

      // Dibujar la ficha en la posición calculada
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI);
      if (i < num ) ctx.fillStyle = 'red'
         else ctx.fillStyle = 'white'
      ctx.fill();
    
     ctx.fillStyle = 'white';
    // Establecer la fuente para el texto
     ctx.font = '24px sans-serif';
     // Dibujar el número en el canvas usando el método fillText()
     x = canvas.width / 2 - ctx.measureText(fichas).width / 2;
     y = canvas.height / 2 + 10;
     ctx.fillText(fichas, x, y);
  }
  
}

function pintarPuchero(canvas){
  var ctx = canvas.getContext('2d');
  ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  for (var i = 0; i < 4; i++) {
      // Calcular la posición en el círculo para cada ficha
      var x = Math.cos(2 * Math.PI * i / 4) * 35 + canvas.width / 2;
      var y = Math.sin(2 * Math.PI * i / 4) * 35 + canvas.height / 2;

      // Dibujar la ficha en la posición calculada
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI);
     
      ctx.fillStyle = 'white'
      ctx.fill();
    
    
     ctx.fillStyle = 'white';
    // Establecer la fuente para el texto
     ctx.font = '24px sans-serif';
     // Dibujar el número en el canvas usando el método fillText()
     x = canvas.width / 2 - ctx.measureText(7).width / 2;
     y = canvas.height / 2 + 10;
     ctx.fillText(7, x, y);
  }
  
}

// pintamos fichas aleatorias en el tablero
//for(let i=0; i < canvases.length; i++){
//  let fichas = Math.ceil(Math.random()*(i+2));
//   if (i>4) pintarCasilla(canvases[i],i+3,fichas)
//  else pintarCasilla(canvases[i],i+2,fichas)

 // console.log(i+" "+(i+2)+ " "+fichas);
//}

//pintarCasilla(canvases[2], 4, 2); // pinta dos fichas en el 4
//pintarCasilla(canvases[8], 11, 5); // pinta 5 fichas en el 11
//pintarCasilla(canvases[6], 9, 3); // pinta 3 fichas en el 9
var arrjugadores=[];
function repartirfichas(){
  let numjugadores = parseInt(prompt("introduce el numero de jugadores"));
if(numjugadores>1&&numjugadores<6){

  let jug1;
  let jug2;
  let jug3;
  let jug4;
  let jug5;
  
    switch(this.numerojugadores.length){
      case 2:
        jug1=new jugador(1,25);
        jug2=new jugador(2,25);
        arrjugadores.push(jug1,jug2);
        break;
      case 3:
        jug1=new jugador(1,16);
        jug2=new jugador(2,16);
        jug3=new jugador(3,16);
        arrjugadores.push(jug1,jug2,jug3);
        break;
      case 4:
        jug1=new jugador(1,12);
        jug2=new jugador(2,12);
        jug3=new jugador(3,12);
        jug4=new jugador(4,12);
        arrjugadores.push(jug1,jug2,jug3,jug4);
        break;
      case 5:
        jug1=new jugador(1,10);
        jug2=new jugador(2,10);
        jug3=new jugador(3,10);
        jug4=new jugador(4,10);
        jug5=new jugador(5,10);
        arrjugadores.push(jug1,jug2,jug3,jug4,jug5);
        break;    
    }
}
  
}

class casilla{

  fichas=0;
  maxFichas;

  constructor(maxFichas){
      this.fichas=0;
      this.maxFichas=maxFichas;
  }

  rellenarCasilla(){
    this.fichas++;
  }
}

class jugador{
  numJugador;
  numFichas;

  constructor(numJugador,numFichas){
    this.numJugador=numJugador;
    this.numFichas=numFichas;
  }

  getnumJugador(){
    return this.numJugador
  }
  getnumFichas(){
    return this.numFichas
  }
  restarficha(){
    this.numFichas--;
    return this.numFichas;
  }
}
var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,turno=-1;

function pasarturno(){
   turno++;
   if(turno>arrjugadores.length){
      turno=-1;
    }else{
      arrjugadores[turno].restarficha();
      document.getElementById("turno").innerHTML= "Le toca al jugador "+turno;
    }
    return turno;
}


var Plato2 =[];
var Plato3 =[];
var Plato4 =[];
var Plato5 =[];
var Plato6 =[];
var Plato7 =[];
var Plato8 =[];
var Plato9 =[];
var Plato10 =[];
var Plato11 =[];

function tirarDado(){
  pasarturno();

  var primdado,secdado,total, max=6, min=1;
  primdado=Math.floor(Math.random()*(max-min)+min);
  secdado=Math.floor(Math.random()*(max-min)+min);
  total=primdado+secdado;
  document.getElementById("dado").innerHTML=total;

  switch(total){
    case 2:
      Plato2.push("Ficha");
      if(a<=Plato2.length){
        pintarCasilla(canvases[total-2],total,a+1);
        a++;
      }
      if(Plato2.length==2){
        alert("Casilla 2 completada")
        pintarCasilla(canvases[total-2],total,0);
        a=0;
        Plato2.length=0;
      }
      break;
    case 3:
      Plato3.push("Ficha");
      if(b<=Plato3.length){
        pintarCasilla(canvases[total-2],total,b+1);
        b++;
      }
      if(Plato3.length==3){
        alert("Casilla 3 completada")
        pintarCasilla(canvases[total-2],total,0);
        b=0;
        Plato3.length=0;
      }
      break;
      case 4:
      Plato4.push("Ficha");
      if(c<=Plato4.length){
        pintarCasilla(canvases[total-2],total,c+1);
        c++;
      }
      if(Plato4.length==4){
        alert("Casilla 4 completada")
        pintarCasilla(canvases[total-2],total,0);
        c=0;
        Plato4.length=0;
      }
      break;
      case 5:
      Plato5.push("Ficha");
      if(d<=Plato5.length){
        pintarCasilla(canvases[total-2],total,d+1);
        d++;
      }
      if(Plato5.length==5){
        alert("Casilla 5 completada")
        pintarCasilla(canvases[total-2],total,0);
        d=0;
        Plato5.length=0;
      }
      break;
      case 6:
      Plato6.push("Ficha");
      if(e<=Plato6.length){
        pintarCasilla(canvases[total-2],total,e+1);
        e++;
      }
      if(Plato6.length==6){
        alert("Casilla 6 completada")
        pintarCasilla(canvases[total-2],total,0);
        e=0;
        Plato6.length=0;
      }
      break;

      case 7:
      alert("7")
      break;

      case 8:
      Plato8.push("Ficha");
      if(g<=Plato8.length){
        pintarCasilla(canvases[total-3],total,g+1);
        g++;
      }
      if(Plato8.length==8){
        alert("Casilla 8 completada")
        pintarCasilla(canvases[total-3],total,0);
        g=0;
        Plato8.length=0;
      }
      break;

      case 9:
      Plato9.push("Ficha");
      if(h<=Plato9.length){
        pintarCasilla(canvases[total-3],total,h+1);
        h++;
      }
      if(Plato9.length==9){
        alert("Casilla 9 completada")
        pintarCasilla(canvases[total-3],total,0);
        h=0;
        Plato9.length=0;
      }
      break;
      case 10:
      Plato10.push("Ficha");
      if(i<=Plato10.length){
        pintarCasilla(canvases[total-3],total,i+1);
        i++;
      }
      if(Plato10.length==10){
        alert("Casilla 10 completada")
        pintarCasilla(canvases[total-3],total,0);
        i=0;
        Plato10.length=0;
      }
      break;
      case 11:
      Plato11.push("Ficha");
      if(j<=Plato11.length){
        pintarCasilla(canvases[total-3],total,j+1);
        j++;
      }
      if(Plato11.length==11){
        alert("Casilla 11 completada")
        pintarCasilla(canvases[total-3],total,0);
        j=0;
        Plato11.length=0;
      }
      break;
  }
  mostrarDatos();

  
}

function mostrarDatos(){
  var datos=arrjugadores.map(function(datos){return"<ul><li>"+datos.getnumJugador+" : "+datos.getnumFichas+"</ul></li>"});
  document.getElementById("jugador").innerHTML=datos;
}







