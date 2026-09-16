import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';

@Component({
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
  ],
  selector: 'app-consulta',
  styleUrl: './consulta.css',
  templateUrl: './consulta.html',
})
export class Consulta {
  listaClientes: Cliente[] = [];

  constructor(private service: ClienteService) {}

  ngOnInit() {
    this.listaClientes = this.service.pesquisarClientes('');
  }
}
