import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {

  item: string = '';


  adicionarItem() {
    console.log("item recebido ", this.item);
    this.item = '';
  }

}
