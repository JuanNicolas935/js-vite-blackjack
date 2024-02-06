/**
   * Esta funcion crea un nuevo deck
   * @param {Array<String>} deck es un arreglo de string
   * @returns {<String>} retorna la carta del deck
   */

//ESTA FUNCION ME PERTMITE TOMAR UNA CARTA
export const pedirCarta = ( deck ) => {
  
    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}

