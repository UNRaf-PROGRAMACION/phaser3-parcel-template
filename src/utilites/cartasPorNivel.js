
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
      [255, 500],
      [455, 500],
      [255, 780],
      [455, 780],
      [255, 1070],
      [455, 1070],
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
      [255, 425],
      [455, 425],
      [255, 705],
      [455, 705],
      [255, 985],
      [455, 985],
      [255, 1265],
      [455, 1265],
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
      [165, 425],
      [365, 425],
      [565, 425],
      [165, 705],
      [365, 705],
      [565, 705],
      [165, 985],
      [365, 985],
      [565, 985],
      [165, 1265],
      [365, 1265],
      [565, 1265],
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
      [90, 415],
      [270, 415],
      [450, 415],
      [630, 415],
      [90, 695],
      [270, 695],
      [450, 695],
      [630, 695],
      [90, 975],
      [270, 975],
      [450, 975],
      [630, 975],
      [90, 1255],
      [270, 1255],
      [450, 1255],
      [630, 1255],
    ],
    
  },
};

const texturasDeCartas = {
    1: "conejo",
    2: "pajarito",
    3: "sombrero",
    4: "reina_blanca",
    5: "pastel",
    6: "conejo_2",
    7: "girasol",
    8: "llave",
}

module.exports = {
    cartasPorNivel,
    texturasDeCartas,
}