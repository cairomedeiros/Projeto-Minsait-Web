export interface PacienteEditarDTO{
    id: string | number;
    nome: string;
    especie: string;
    raca: string;
    idade: number;
    peso: number;
    cor: string;
    eResultadoTriagem: number;
}