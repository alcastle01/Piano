//ejercicio 1
class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  }
  
  const persona1 = new Persona('Juan', 30, 'Ingeniero');
  const persona2 = new Persona('Ana', 25, 'Doctor');
  
  console.log(persona1);
  console.log(persona2);
  
//ejercicio 2
  class Vehiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    arrancar() {
      console.log('El vehículo ha arrancado.');
    }
  
    detener() {
      console.log('El vehículo se ha detenido.');
    }
  }
  
  class Coche extends Vehiculo {
    acelerar() {
      console.log('El coche está acelerando.');
    }
  }
  
  const vehiculo1 = new Vehiculo('Toyota', 'Camry');
  const coche1 = new Coche('Honda', 'Civic');
  
  vehiculo1.arrancar();
  coche1.acelerar();

  class CuentaBancaria {
    constructor() {
      this.saldo = 0;
    }
  
    depositar(cantidad) {
      this.saldo += cantidad;
      console.log(`Se depositaron ${cantidad} dólares. Saldo actual: ${this.saldo} dólares.`);
    }
  
    retirar(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se retiraron ${cantidad} dólares. Saldo actual: ${this.saldo} dólares.`);
      } else {
        console.log('Fondos insuficientes para el retiro.');
      }
    }
  }
  
  const cuenta = new CuentaBancaria();
  cuenta.depositar(1000);
  cuenta.retirar(500);
  
  //ejercicio 3
  class CuentaBancaria2 {
    constructor() {
      this.saldo = 0;
    }
  
    depositar(cantidad) {
      this.saldo += cantidad;
      console.log(`Se depositaron ${cantidad} dólares. Saldo actual: ${this.saldo} dólares.`);
    }
  
    retirar(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se retiraron ${cantidad} dólares. Saldo actual: ${this.saldo} dólares.`);
      } else {
        console.log('Fondos insuficientes para el retiro.');
      }
    }
  }
  
  const cuenta2 = new CuentaBancaria2();
  cuenta2.depositar(1000);
  cuenta2.retirar(500);
  

//ejercicio 4
class Figura {
    calcularArea() {
      console.log('Área de la figura base');
    }
  }
  
  class Circulo extends Figura {
    calcularArea() {
      const radio = 5;
      const area = Math.PI * radio * radio;
      console.log(`Área del círculo: ${area}`);
    }
  }
  
  class Rectangulo extends Figura {
    calcularArea() {
      const base = 6;
      const altura = 4;
      const area = base * altura;
      console.log(`Área del rectángulo: ${area}`);
    }
  }
  
  const circulo = new Circulo();
  const rectangulo = new Rectangulo();
  
  circulo.calcularArea();
  rectangulo.calcularArea();

  //ejercicio 5 
  class Direccion {
    constructor(calle, ciudad, codigoPostal) {
      this.calle = calle;
      this.ciudad = ciudad;
      this.codigoPostal = codigoPostal;
    }
  }
  
  class Persona2 {
    constructor(nombre, direccion) {
      this.nombre = nombre;
      this.direccion = direccion;
    }
  }
  
  const direccion1 = new Direccion('123 Main St', 'Ciudad', '12345');
  const persona4 = new Persona2('Juan', direccion1);
  
  console.log(persona4);

  //ejercicio 6 
  class CuentaBancaria6 {
    constructor() {
      this.saldo = 1000; // Inicializamos con un saldo de 1000 dólares
    }
  
    depositar(cantidad) {
      this.saldo += cantidad;
      console.log(`Se depositaron ${cantidad} dólares. Saldo actual: ${this.saldo} dólares.`);
    }
  
    retirar(cantidad) {
      try {
        if (cantidad <= this.saldo) {
          this.saldo -= cantidad;
          console.log(`Se retiraron ${cantidad} dólares. Saldo actual: ${this.saldo} dólares.`);
        } else {
          throw new Error('Fondos insuficientes para el retiro.');
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  }
  
  const cuenta6 = new CuentaBancaria6();
  cuenta6.depositar(100);
  cuenta6.retirar(2000);

  
  // ejercicio 7
  class Animal {
    hablar() {
      console.log('Animal hablando');
    }
  }
  
  class Perro extends Animal {
    hablar() {
      console.log('El perro ladra');
    }
  }
  
  class Gato extends Animal {
    hablar() {
      console.log('El gato maulla');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.hablar();
  gato.hablar();
  

  /////////////////////////////////////////7
// notas

const botones = document.querySelectorAll('.boton');

botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        const sonidoId = boton.getAttribute('data-sonido');
        const sonido = document.getElementById(sonidoId);
        sonido.currentTime = 0;
        sonido.play();
    });
});
