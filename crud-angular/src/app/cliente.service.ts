import { Service } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Service()
export class ClienteService {
  salvar(cliente: Cliente) {
    console.log(cliente);
  }
}
