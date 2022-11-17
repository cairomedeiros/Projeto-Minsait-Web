import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/app/Interfaces/Tutor';
import { TutorService } from 'src/app/Services/Tutor.service';

@Component({
  selector: 'app-desativados',
  templateUrl: './desativados.component.html',
  styleUrls: ['./desativados.component.scss']
})
export class DesativadosComponent implements OnInit {

  constructor(private tutorService: TutorService) { }

  tutor: Tutor[] = [];
  tutorId: number | string = "";

  ngOnInit(): void {
    this.buscarTutoresDesativados();
  }

  buscarTutoresDesativados(){
    this.tutorService.getDesativeTutores().subscribe(res => {
      console.log(res);
      this.tutor = Object.values(res);
    })
  }

  ativarTutor(tutor: Tutor) {
    this.tutorId = tutor.id;
    this.tutorService.ativarTutor(this.tutorId)
      .subscribe(() => {
        this.buscarTutoresDesativados();
      });
  }

}
