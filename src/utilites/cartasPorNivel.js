
const cartasPorNivel = {
  1: {
    coincidencias: 2,
    fondo_mapa: "fondo_nivel1",
    fondo_nivel: "bosque",
    texto: "BOSQUE",
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
    texto: "LAGO",
    tiempo: 15,
    tipos: [1, 1, 2, 2, 3, 3],
    coordenadas: [
      [275, 560],
      [435, 560],
      [275, 840],
      [435, 840],
      [275, 1130],
      [435, 1130],
    ],
  },

  3: {
    coincidencias: 4,
    fondo_mapa: "fondo_nivel3",
    fondo_nivel: "montana",
    texto: "MONTAÑA",
    tiempo: 25,
    tipos: [1, 1, 2, 2, 3, 3, 4, 4],
    coordenadas: [
      [275, 425],
      [435, 425],
      [275, 705],
      [435, 705],
      [275, 985],
      [435, 985],
      [275, 1265],
      [435, 1265],
    ],
   
  },

  4: {
    coincidencias: 6,
    fondo_mapa: "fondo_nivel4",
    fondo_nivel: "jardin",
    texto: "JARDIN",
    tiempo: 30,
    tipos: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    coordenadas: [
      [205, 425],
      [365, 425],
      [525, 425],
      [205, 705],
      [365, 705],
      [525, 705],
      [205, 985],
      [365, 985],
      [525, 985],
      [205, 1265],
      [365, 1265],
      [525, 1265],
    ],
   
  },

  5: {
    coincidencias: 8,
    fondo_mapa: "fondo_nivel5",
    fondo_nivel: "castillo",
    texto: "CASTILLO",
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
    
  },
};

const texturasDeCartas = {
    1: "conejo",
    2: "pajarito",
    3: "sombrero",
    4: "reina_blanca",
    5: "rosa",
    6: "conejo_2",
    7: "girasol",
    8: "llave",
    9: "pastel",
    10: "pocion",
    11: "flor",
}

module.exports = {
    cartasPorNivel,
    texturasDeCartas,
}