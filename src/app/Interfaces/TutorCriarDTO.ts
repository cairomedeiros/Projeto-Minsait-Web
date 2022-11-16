import { PacienteCriarDTO } from "./PacienteCriarDTO";

export interface TutorCriarDTO{
    nome: string;
    cpf: string;
    endereco: string;
    telefone: string;
    dataNascimento: string;
    pacienteList: [PacienteCriarDTO];
}