import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/app/Interfaces/Tutor';
import { TutorDTO } from 'src/app/Interfaces/TutorDTO';
import { TutorService } from 'src/app/Services/Tutor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PacienteLista } from 'src/app/Interfaces/PacienteLista';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutor: Tutor[] = [];
  display: boolean = false;
  tutorPacientes: PacienteLista[] = [];

  displayAtualizar: boolean = false;
  tutorId: number | string = "";

  tutorForm!: FormGroup;

  constructor(private tutorService: TutorService, private fb: FormBuilder) {
     this.tutorForm = this.fb.group({
      nome: [''],
      cpf: [''],
      endereco: [''],
      telefone: [''],
      dataNascimento: ['']
     })
  }

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

  atualizarTutorDialog(tutor: Tutor){
    this.tutorId = tutor.id;
    this.displayAtualizar = true;
  }

  atualizar(){
    this.atualizarTutor();
  }

  atualizarTutor(){
    this.tutorService.updateTutor(this.tutorId, this.tutorForm.value)
      .subscribe(res => console.log(res))

  }


}
