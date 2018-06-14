import { AtendimentoFraterno } from "../../models/atendimento-fraterno";

import { TIPOATENDIMENTO } from "./mock-tipo-atendimento";

export const ATENDIMENTOS: AtendimentoFraterno[] = [
    {
        idAtendimento: 1,
        nomePers: 'Leandro Freire',
        tel:'418 262 6549',
        tipoAtendimento: TIPOATENDIMENTO[0],
        datAtendimento: new Date('2018-05-14')
      },
      {
        idAtendimento: 2,
        nomePers: 'Diego Barreto',
        tel:'',
        tipoAtendimento: TIPOATENDIMENTO[2],
        datAtendimento: new Date('2018-05-16')
      },
      {
        idAtendimento: 3,
        nomePers: 'Nilson Francisco',
        tel:'33833699',
        tipoAtendimento: TIPOATENDIMENTO[1],
        datAtendimento: new Date('2018-05-14')
      },
      {
        idAtendimento: 4,
        nomePers: 'Neuza Souza Sofredora',
        tel:'418 262 6549',
        tipoAtendimento: TIPOATENDIMENTO[0],
        datAtendimento: new Date('2018-05-15')
      },
      {
        idAtendimento: 5,
        nomePers: 'Jorge Silva Santos',
        tel:'418 262 6549',
        tipoAtendimento: TIPOATENDIMENTO[3],
        datAtendimento: new Date('2018-05-14')
      },
      {
        idAtendimento: 6,
        nomePers: 'Aline Silva',
        tel:'418 262 6529',
        tipoAtendimento: TIPOATENDIMENTO[0],
        datAtendimento: new Date('2018-05-16')
      }
]
