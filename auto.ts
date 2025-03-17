// Clase Auto con atributos y métodos
export class Auto {

    marca: string;
    modelo: string;
    año: number;
    color: string;
    velocidad: number;

    constructor(marca: string, modelo: string, año: number, color: string, velocidad: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.velocidad = 0; // Inicio la velocidad en 0
    }

    acelerar(): void {
        this.velocidad += 20; // Aumento la velocidad en 20
        console.log(`${this.marca} ${this.modelo} está acelerando. Velocidad actual: ${this.velocidad} km/h`);
    }

    frenar(): void {
        if (this.velocidad > 0) {
            this.velocidad -= 10; // Reduzco la velocidad en 10
            console.log(`${this.marca} ${this.modelo} está frenando. Velocidad actual: ${this.velocidad} km/h`);
        } else {
            console.log(`${this.marca} ${this.modelo} ya está detenido.`);
        }
    }
}


