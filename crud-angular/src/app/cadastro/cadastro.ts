import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro implements OnInit {
  cliente: Cliente = Cliente.newCliente();
  atualizando = false;
  snack: MatSnackBar = inject(MatSnackBar);

  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query) => {
      const id = query.get('id');

      if (id) {
        const clienteEncontrado = this.service.buscarClientePorId(id);

        if (clienteEncontrado) {
          this.atualizando = true;
          this.cliente = clienteEncontrado;
        }
      }
    });
  }

  salvar() {
    if (!this.atualizando) {
      this.service.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
      this.mostrarMensagem('Salvo com sucesso! ');
    } else {
      this.service.atualizar(this.cliente);
      this.router.navigate(['/consulta']);
      this.mostrarMensagem('Atualizado com sucesso! ');
    }
  }

  mostrarMensagem(message: string) {
    this.snack.open(message, 'OK');
  }
}
