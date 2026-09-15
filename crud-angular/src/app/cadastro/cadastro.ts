import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Cliente } from './cliente';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  client: Cliente = Cliente.newCliente();

  constructor(private service: ClienteService) {}

  salvar() {
    this.service.salvar(this.client);
  }
}
