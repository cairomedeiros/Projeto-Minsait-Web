import { Component, OnInit } from '@angular/core';
import { Tutor, Paciente } from 'src/app/Interfaces/customers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutor: Tutor[] = [
    {id: "bb", name: "juca"},
    {id: "a", name: "joaquim"}
  
  ]
  paciente: Paciente[] = [{
    name: "Mel",
    company: "n consta",
    tutorId: this.tutor[0].id
  },
  {
    name: "cairo",
    company: "vasco",
    tutorId: this.tutor[1].id
  }]

  constructor() {}

  ngOnInit(): void {
  }

}
