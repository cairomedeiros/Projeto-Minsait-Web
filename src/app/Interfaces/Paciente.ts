export interface Paciente{
    id: string | number;
    nome: string;
    especie: string;
    raca: string;
    idade: number;
    peso: number;
    cor: string;
    tutorId: string | number;
    eResultadoTriagem: number;
}