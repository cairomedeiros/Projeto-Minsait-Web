import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/Services/Tutor.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  tutorForm!: FormGroup;

  constructor(private tutorService: TutorService, private fb: FormBuilder) { 
    this.tutorForm = this.fb.group({
      nome: [''],
      cpf: [''],
      endereco: [''],
      telefone: [''],
      dataNascimento: [''],
      nomeP: [''],
      especie: [''],
      raca: [''],
      idade: [''],
      peso: ['']

     })
  }

  ngOnInit(): void {
  }



}
