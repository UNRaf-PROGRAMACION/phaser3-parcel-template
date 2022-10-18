
const cartasPorNivel = {
  1: {
    coincidencias: 2,
    fondo_mapa: "fondo_nivel1",
    fondo_nivel: "bosque", 
    tiempo: 10,
    tipos: [1, 1, 2, 2],
    coordenadas: [
      [220, 500],
      [500, 500],
      [220, 1100],
      [500, 1100],
    ],
    
  },

  2: {
    coincidencias: 3,
    fondo_mapa: "fondo_nivel2",
    fondo_nivel: "lago",
    tiempo: 15,
    tipos: [1, 1, 2, 2, 3, 3],
    coordenadas: [
      [275, 415],
      [435, 415],
      [275, 695],
      [435, 695],
      [275, 975],
      [435, 975],
    ],
    
  },

  3: {
    coincidencias: 4,
    fondo_mapa: "fondo_nivel3",
    fondo_nivel: "montana",
    tiempo: 25,
    tipos: [1, 1, 2, 2, 3, 3, 4, 4],
    coordenadas: [
      [275, 415],
      [435, 415],
      [275, 695],
      [435, 695],
      [275, 975],
      [435, 975],
      [275, 1255],
      [435, 1255],
    ],
    //si no se encuentran dos pares de cartas iguales seguidas, se descuentan 5 segundos del temporizador
    //if (tarjeta1.tipo !== tarjeta2.tipo) {
      //this.tiempo = this.tiempo - 5000
      //callback: this.onSecond,
      //callbackScope: this,
      //loop: true,
    //});
    
  },

  4: {
    coincidencias: 6,
    fondo_mapa: "fondo_nivel4",
    fondo_nivel: "jardin",
    tiempo: 30,
    tipos: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    coordenadas: [
      [275, 415],
      [435, 415],
      [595, 415],
      [275, 695],
      [435, 695],
      [595, 695],
      [275, 975],
      [435, 975],
      [595, 975],
      [275, 1255],
      [435, 1255],
      [595, 1255],
    ],
    //En el segundo 25 aparece el gato y bloquea un par de cartas al azar, 
    //tardan 5 segundos en desbloquearse nuevamente
    //this.cartasBloqueadas = this.physics.add.staticGroup();
    //numeros8 = numeros8.sort(() => (Math.random() > 0.5 ? 1 : -1));
  },

  5: {
    coincidencias: 8,
    fondo_mapa: "fondo_nivel5",
    fondo_nivel: "castillo",
    tiempo: 40,
    tipos: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    coordenadas: [
      [115, 415],
      [275, 415],
      [435, 415],
      [595, 415],
      [115, 695],
      [275, 695],
      [435, 695],
      [595, 695],
      [115, 975],
      [275, 975],
      [435, 975],
      [595, 975],
      [115, 1255],
      [275, 1255],
      [435, 1255],
      [595, 1255],
    ],
    //En el segundo 25 aparece la reina y mezcla las cartas que quedan
    //numeros16 = numeros16.sort(() => (Math.random() > 0.5 ? 1 : -1));
  },
};

const texturasDeCartas = {
    1: "corazon",
    2: "flor",
    3:"sombrero",
    4:"torta",
    5: "pocion",
    6: "rosa",
    7: "girasol",
    8: "llave",
}

module.exports = {
    cartasPorNivel,
    texturasDeCartas,
}