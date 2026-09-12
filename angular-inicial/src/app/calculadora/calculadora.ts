import th from '@angular/common/locales/th';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number = 0;

  calcularResultado(): void {
    this.resultado = (this.numero1 ?? 0) + (this.numero2 ?? 0);

    this.numero1 = null;
    this.numero2 = null;
  }
}
