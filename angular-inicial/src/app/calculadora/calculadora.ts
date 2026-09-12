import th from '@angular/common/locales/th';
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado() {
    this.resultado = this.numero1 + this.numero2;
  }
}
