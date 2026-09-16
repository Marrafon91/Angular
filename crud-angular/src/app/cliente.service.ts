import { Service } from '@angular/core';
import { Cliente } from './cadastro/cliente';
import { C } from '@angular/cdk/keycodes';

@Service()
export class ClienteService {
  static REPO_CLIENTES = '_CLIENTES';

  salvar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarClientes(nome: string): Cliente[] {
    return this.obterStorage();
  }

  obterStorage(): Cliente[] {
    const repositorioClientes = localStorage.getItem(
      ClienteService.REPO_CLIENTES,
    );

    if (repositorioClientes) {
      const clientes: Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(
      ClienteService.REPO_CLIENTES,
      JSON.stringify(clientes),
    );
    return clientes;
  }
}
