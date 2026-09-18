import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    CommonModule,
  ],
  selector: 'app-consulta',
  styleUrl: './consulta.css',
  templateUrl: './consulta.html',
})
export class Consulta implements OnInit {
  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  snack: MatSnackBar = inject(MatSnackBar);
  colunasTable: string[] = [
    'id',
    'nome',
    'cpf',
    'dataNascimento',
    'email',
    'acoes',
  ];

  constructor(
    private service: ClienteService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar() {
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

  peparaEditar(id: string) {
    this.router.navigate(['/cadastro'], { queryParams: { id: id } });
  }

  preparaDeletar(cliente: Cliente) {
    cliente.deletando = true;
  }

  deletar(cliente: Cliente) {
    this.service.deletar(cliente);
    this.listaClientes = this.service.pesquisarClientes('');
    this.mostrarMensagem('Deletado com sucesso! ');
  }

  mostrarMensagem(message: string) {
    this.snack.open(message, 'OK');
  }
}
