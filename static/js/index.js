agregarCaracter = (caracter) => {
  const texto = document.querySelector('#screen')
  const operadores =['*','+','-','/']
  
  const array = Array.from(texto.innerHTML)
  const ultimo = array.at(-1)

  if (operadores.includes(ultimo)){
    //validar que el ultimo sea numero
      if(operadores.includes(caracter)){
        texto.innerHTML = texto.innerHTML.slice(0,-1)
        texto.innerHTML += caracter
      }else{
        texto.innerHTML += caracter
      }
  } else {
    console.log('aqui');
    texto.innerHTML += caracter
  }
}

calcular = () => {
  const texto = document.querySelector('#screen')
  let resultado
  try {
    resultado = eval(texto.innerHTML)
    texto.innerHTML = resultado
  } catch (error) {
    resultado = 'Error'
    texto.innerHTML = resultado
    setTimeout(() => {
      texto.innerHTML = ''
    }, 1000);
  }
}

eliminar = () => {
  const texto = document.querySelector('#screen')
  texto.innerHTML = texto.innerHTML.slice(0,-1)
}

limpiar = () => {
  const texto = document.querySelector('#screen')
  texto.innerHTML = ''
}