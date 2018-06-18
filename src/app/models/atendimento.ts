
import { Atividade } from "./atividade";

export class Atendimento {
    id: number;
    nome: string;
    telefone: string;
    atividade: Atividade;
    dataAtendimento: Date;
}

