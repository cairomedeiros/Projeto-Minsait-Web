import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/Services/Tutor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TutorCriarDTO } from 'src/app/Interfaces/TutorCriarDTO';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  tutorForm!: FormGroup;
  tutorCriarDTO: TutorCriarDTO = {
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    pacienteList: [{
      nome: "",
      especie: "",
      raca: "",
      idade: 0,
      peso: 0,
      cor: "",
      eResultadoTriagem: 0
    }]

  };

  constructor(
    private tutorService: TutorService, 
    private fb: FormBuilder,
    private router: Router
    ) {
    this.tutorForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      dataNascimento: [''],
      nomep: [''],
      especie: [''],
      raca: [''],
      idade: [''],
      peso: [''],
      cor: [''],
      eResultadoTriagem: ['']

    })
  }

  ngOnInit(): void {
  }

  submitCadastro() {
    this.cadastroTutor();
  }

  cadastroTutor() {
    console.log('entrou');
    this.tutorCriarDTO.nome = this.tutorForm.value.nome;
    this.tutorCriarDTO.cpf = this.tutorForm.value.cpf;
    this.tutorCriarDTO.email = this.tutorForm.value.email;
    this.tutorCriarDTO.telefone = this.tutorForm.value.telefone;
    this.tutorCriarDTO.dataNascimento = this.tutorForm.value.dataNascimento;
    this.tutorCriarDTO.pacienteList[0].nome = this.tutorForm.value.nomep;
    this.tutorCriarDTO.pacienteList[0].especie = this.tutorForm.value.especie;
    this.tutorCriarDTO.pacienteList[0].raca = this.tutorForm.value.raca;
    this.tutorCriarDTO.pacienteList[0].idade = this.tutorForm.value.idade;
    this.tutorCriarDTO.pacienteList[0].peso = this.tutorForm.value.peso;
    this.tutorCriarDTO.pacienteList[0].cor = this.tutorForm.value.cor;
    this.tutorCriarDTO.pacienteList[0].eResultadoTriagem = this.tutorForm.value.eResultadoTriagem;

    this.tutorService.createTutor(this.tutorCriarDTO).subscribe(() => {
      this.router.navigate([""]);
    });
  }

}
