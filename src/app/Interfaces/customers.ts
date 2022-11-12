export interface Tutor {
    id?: string;
    name?: string;
    pacienteList?: Paciente
}

export interface Paciente {
    name?: string;
    company?: string;
    tutorId?: string;
}