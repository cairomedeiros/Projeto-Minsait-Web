import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from '../Interfaces/Paciente';
import { PacienteCriarDTO } from '../Interfaces/PacienteCriarDTO';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private httpClient: HttpClient) { }

  atualizarPet(id: number | string, paciente: Paciente): Observable<Paciente> {
    return this.httpClient.put<Paciente>(`${environment.apiURL}/paciente/${id}`, paciente);
  }

  criarPet(paciente: PacienteCriarDTO): Observable<PacienteCriarDTO> {
    return this.httpClient.post<PacienteCriarDTO>(`${environment.apiURL}/paciente`, paciente)
  }

  excluirPet(id: number | string): Observable<Paciente> {
    return this.httpClient.delete<Paciente>(`${environment.apiURL}/paciente/${id}`);
  }

  buscarPets(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${environment.apiURL}/paciente`);
  }
}
