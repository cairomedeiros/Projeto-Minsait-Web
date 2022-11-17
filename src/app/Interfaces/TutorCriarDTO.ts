import { PacienteCriarDTO } from "./PacienteCriarDTO";

export interface TutorCriarDTO{
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    dataNascimento: string;
    pacienteList: [PacienteCriarDTO];
}