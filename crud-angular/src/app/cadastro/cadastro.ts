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
import { MatSelectModule } from '@angular/material/select';

import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { BrasilapiService } from '../brasilapi.service';
import { Estado, Municipio } from '../brasil.models';

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
    MatSelectModule,
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro implements OnInit {
  cliente: Cliente = Cliente.newCliente();
  snack = inject(MatSnackBar);
  estados: Estado[] = [];
  municipios: Municipio[] = [];
  atualizando = false;

  constructor(
    private service: ClienteService,
    private brasilApiService: BrasilapiService,
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
          console.log('Cliente encontrado:', this.cliente);
        }
      }
      this.carregarUFs();
    });
  }

  carregarUFs(): void {
    this.brasilApiService.listarUFs().subscribe({
      next: (listaEstados) => {
        this.estados = listaEstados;
        console.log('Estados carregados:', this.estados);
        console.log('UF do cliente:', this.cliente.uf);
        if (this.cliente.uf) {
          this.carregarMunicipios(this.cliente.uf);
        }
      },

      error: (erro) => {
        console.log('Erro ao carregar estados:', erro);
      },
    });
  }

  carregarMunicipios(uf: string): void {
    if (!uf) {
      this.municipios = [];
      this.cliente.municipio = undefined;
      return;
    }

    this.brasilApiService.listarMunicipios(uf).subscribe({
      next: (listaMunicipios) => {
        this.municipios = listaMunicipios;

        console.log('Municípios carregados:', this.municipios);
        console.log('Município do cliente:', this.cliente.municipio);
      },

      error: (erro) => {
        console.log('Erro ao carregar municípios:', erro);
      },
    });
  }

  salvar(): void {
    if (!this.atualizando) {
      this.service.salvar(this.cliente);
      this.mostrarMensagem('Salvo com sucesso!');
      this.limpar();
    } else {
      this.service.atualizar(this.cliente);
      this.mostrarMensagem('Atualizado com sucesso!');
      this.router.navigate(['/consulta']);
    }
  }

  limpar(): void {
    this.cliente = Cliente.newCliente();
    this.municipios = [];
    this.atualizando = false;
  }

  mostrarMensagem(message: string): void {
    this.snack.open(message, 'OK');
  }
}
