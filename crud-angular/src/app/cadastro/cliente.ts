export class Cliente {
  id?: string;
  nome?: string;
  cpf?: string;
  dataNascimento?: string;
  email?: string;
  uf?: string;
  municipio?: string;
  deletando: boolean = false;

  static newCliente() {
    const cliente = new Cliente();
    cliente.id = crypto.randomUUID();
    return cliente;
  }
}
