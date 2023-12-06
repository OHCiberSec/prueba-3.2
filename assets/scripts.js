function verificarPassword() {
    var resultadoParrafo = document.getElementById('resultado');

    // Eliminé el símbolo '#' de los IDs
    var digito1 = document.getElementById('digito 1').value;
    var digito2 = document.getElementById('digito 2').value;
    var digito3 = document.getElementById('digito 3').value;

    if (digito1 === '9' && digito2 === '1' && digito3 === '1') {
      resultadoParrafo.textContent = 'Clave 1 correcta'; 
    } else if (digito1 === '7' && digito2 === '1' && digito3 === '4') {
      resultadoParrafo.textContent = 'Clave 2 es correcta'; 
    } else {
      resultadoParrafo.textContent = 'Clave incorrecta'; 
    }
}
