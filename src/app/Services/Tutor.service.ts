import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TutorDTO } from '../Interfaces/TutorDTO';
import { Tutor } from '../Interfaces/Tutor';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  tutor: Tutor[] = [];

  constructor(private http: HttpClient) { }

  getTutores(): Observable<TutorDTO>{
    return this.http.get<TutorDTO>(`${environment.apiURL}/tutor`);
  }
}
