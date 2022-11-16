import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PacienteCriarDTO } from '../Interfaces/PacienteCriarDTO';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private httpClient: HttpClient) { }

  atualizarPet(id: number | string, value: any): Observable<any>{
    return this.httpClient.put<any>(`${environment.apiURL}/paciente/${id}`, value);
  }

  criarPet(paciente: PacienteCriarDTO):Observable<PacienteCriarDTO>{
    return this.httpClient.post<PacienteCriarDTO>(`${environment.apiURL}/paciente`, paciente)
  }
}
