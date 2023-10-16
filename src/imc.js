function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN';
    }
  
    const alturaMetros = altura / 100; 
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); 
}


function classificaIMC(imc) {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 24.9) {
      return 'Peso normal';
    } else if (imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc < 34.9) {
      return 'Obesidade grau I';
    } else if (imc < 39.9) {
      return 'Obesidade grau II';
    } else {
      return 'Obesidade grau III';
    }
  }

module.exports = { calcularIMC, classificaIMC }; 
 