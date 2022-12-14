import { Paciente } from "./Paciente";

export interface Tutor{
    id: string | number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    dataNascimento: string;
    pacienteList: [Paciente];
}