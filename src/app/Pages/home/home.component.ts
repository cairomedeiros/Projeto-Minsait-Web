import { Component, OnInit } from '@angular/core';
import { Tutor, Paciente } from 'src/app/Interfaces/customers';
import { TutorService } from 'src/app/Services/Tutor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutor: any = [];

  constructor(private tutorService: TutorService) {}

  ngOnInit(): void {
    this.tutorService.getTutores().subscribe(res => console.log(res));
  }

}
