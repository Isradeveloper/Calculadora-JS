agregarCaracter = (caracter) => {
  const texto = document.querySelector('#screen')
  texto.innerHTML += caracter
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