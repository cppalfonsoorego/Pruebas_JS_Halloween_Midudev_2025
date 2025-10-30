function countSheep(letters) {
  const mapaLetras = [ 
    {letra: "s", cant: 0}, 
    {letra: "h", cant: 0}, 
    {letra: "e", cant: 0}, 
    {letra: "p", cant: 0}, 
  ]
  
  const arrLetters = letters.split('')

    arrLetters.forEach ( (letra, i) => {
            if (letra === 's')
            mapaLetras[0].cant++;
        
        if (letra === 'h')
            mapaLetras[1].cant++;
        
        if (letra === 'e')
            mapaLetras[2].cant++;

            if (letra === 'p')
            mapaLetras[3].cant++;
    } )
    
    const cantidadDeLetrasE = mapaLetras[2].cant

    const mapaLetrasNormales = mapaLetras.filter ( (l, i) => {
        if ( i !== 2)
            return l
    })

    const arrCantidadesDeLetrasNormales = mapaLetrasNormales.map ( (x) => {
        return x.cant
    })

    const menorCantidad = Math.min(...arrCantidadesDeLetrasNormales)

    const letraDeMenorCantidad = mapaLetrasNormales[arrCantidadesDeLetrasNormales.indexOf ( menorCantidad)].letra

    const verdaderaLetraDeMenorCantidad = mapaLetras.forEach( (x, i) => {
        if (x.letra === letraDeMenorCantidad)
            return i
    })

    if ( cantidadDeLetrasE >= (menorCantidad * 2) )
        return menorCantidad
    else    
        //return menorCantidad-1
        return Math.trunc (cantidadDeLetrasE / 2)
}

console.log( "Expected: 2 -> ", countSheep("sheepseepsheep") );
console.log( "Expected: 1 -> ", countSheep("ssshhheeeppp") );

