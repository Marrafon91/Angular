import { Data } from '@angular/router';
import { v4 as uuid } from 'uuid'

export class Cliente {
    id?: string;
    nome?: string;
    email?: string;
    cpf?: string;
    dataNascimento?: Data;

    static newClient() {
        const cliente = new Cliente();
        cliente.id = uuid();
        return cliente;
    }
}