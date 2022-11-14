import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/app/Interfaces/Tutor';
import { TutorDTO } from 'src/app/Interfaces/TutorDTO';
import { TutorService } from 'src/app/Services/Tutor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutor: Tutor[] = [];
  display: boolean = false;
  tutorPacientes: any;

  constructor(private tutorService: TutorService) {}

  ngOnInit(): void {
    this.tutorService.getTutores().subscribe(res => {
      console.log(res);
      this.tutor = Object.values(res);
    })
  }

  showDialog(tutor: Tutor) {
    this.tutorPacientes = [];
    this.tutorPacientes = tutor.pacienteList;
    this.display = true;
  }


}
