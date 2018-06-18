import { Atendimento } from "../../models/atendimento";

import { ATIVIDADE } from "./mock-atividade";

export const ATENDIMENTOS: Atendimento[] = [
    {
        id: 1,
        nome: 'Leandro Freire',
        telefone:'418 262 6549',
        atividade: ATIVIDADE[0],
        dataAtendimento: new Date('2018-05-14')
      },
      {
        id: 2,
        nome: 'Diego Barreto',
        telefone:'',
        atividade: ATIVIDADE[2],
        dataAtendimento: new Date('2018-05-16')
      },
      {
        id: 3,
        nome: 'Nilson Francisco',
        telefone:'33833699',
        atividade: ATIVIDADE[1],
        dataAtendimento: new Date('2018-05-14')
      },
      {
        id: 4,
        nome: 'Neuza Souza Sofredora',
        telefone:'418 262 6549',
        atividade: ATIVIDADE[0],
        dataAtendimento: new Date('2018-05-15')
      },
      {
        id: 5,
        nome: 'Jorge Silva Santos',
        telefone:'418 262 6549',
        atividade: ATIVIDADE[3],
        dataAtendimento: new Date('2018-05-14')
      },
      {
        id: 6,
        nome: 'Aline Silva',
        telefone:'418 262 6529',
        atividade: ATIVIDADE[0],
        dataAtendimento: new Date('2018-05-16')
      }
]
