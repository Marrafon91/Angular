import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  somarResultado() {
    this.resultado = this.numero1 + this.numero2;
  }
  subtrairResultado() {
    this.resultado = this.numero1 - this.numero2;
  }
  mutiplicarResultado() {
    this.resultado = this.numero1 * this.numero2;
  }
  divirResultado() {
    this.resultado = this.numero1 / this.numero2;
  }
}
