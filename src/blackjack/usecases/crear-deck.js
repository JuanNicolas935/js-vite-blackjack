  import _ from 'underscore';

  /**
   * Esta funcion crea un nuevo deck
   * @param {Array<String>} tiposDeCarta Ejem: ['C','D','H','S']
   * @param {Array<String>} tiposEspeciales Ejem: ['A','J','Q','K']
   * @returns {Array<String>} retorna un nuevo deck de cartas
   */
  
  //ESTA FUNCION CREA UN NUEVO DECK
    export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  

    if ( !tiposDeCarta || !tiposDeCarta.length === 0 ) 
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    
        if ( !tiposDeCarta || !tiposDeCarta.length === 0 ) 
        throw new Error('TiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];
    for( let i =2; i <= 10; i++ ){
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ){
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    return _.shuffle ( deck );
}

// export default crearDeck;