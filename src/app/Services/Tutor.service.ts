import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TutorDTO } from '../Interfaces/TutorDTO';
import { Tutor } from '../Interfaces/Tutor';
import { TutorCriarDTO } from '../Interfaces/TutorCriarDTO';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  tutor: Tutor[] = [];

  constructor(private http: HttpClient) { }

  getTutores(): Observable<TutorDTO>{
    return this.http.get<TutorDTO>(`${environment.apiURL}/tutor`);
  }

  updateTutor(id: number | string, value: Tutor): Observable<Tutor>{
    return this.http.put<Tutor>(`${environment.apiURL}/tutor/${id}`, value);
  }

  desativeTutor(id: number | string): Observable<Tutor>{
    return this.http.delete<Tutor>(`${environment.apiURL}/tutor/${id}`);
  }

  createTutor(tutor: TutorCriarDTO){
    return this.http.post(`${environment.apiURL}/tutor`, tutor);
  }

  getDesativeTutores(): Observable<TutorDTO>{
    return this.http.get<TutorDTO>(`${environment.apiURL}/tutor/desativados`);
  }

  ativarTutor(id: number | string): Observable<Tutor>{
    return this.http.delete<Tutor>(`${environment.apiURL}/tutor/ativar/${id}`);
  }
}
