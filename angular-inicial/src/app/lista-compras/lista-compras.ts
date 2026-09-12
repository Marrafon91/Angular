import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';

@Component({
  imports: [FormsModule],
  selector: 'app-lista-compras',
  styleUrl: './lista-compras.css',
  templateUrl: './lista-compras.html',
})
export class ListaCompras {
  item: string = '';
  lista: ItemLista[] = [];

  adiconarItem() {
    let itemLista = new ItemLista();

    itemLista.id = this.lista.length + 1;
    itemLista.nome = this.item;

    this.lista.push(itemLista);
    
    this.item = '';
  }
}
