import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ItemLista } from './itemlista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, NgClass],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.css',
})
export class ListaCompras {
  item: string = '';
  lista: ItemLista[] = [];
  erro: string = '';

  adiconarItem() {
    // Verifica se o campo está vazio ou contém apenas espaços
    if (!this.item.trim()) {
      this.erro = 'Não é possível adicionar um item em branco.';
      return;
    }

    let itemLista = new ItemLista();

    itemLista.id = this.lista.length + 1;
    itemLista.nome = this.item.trim();

    this.lista.push(itemLista);

    this.item = '';
    this.erro = '';
  }

  limparLista() {
    this.lista = [];
    this.erro = '';
  }
}
