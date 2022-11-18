import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/Services/Tutor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TutorCriarDTO } from 'src/app/Interfaces/TutorCriarDTO';
import { Triagem } from 'src/app/Interfaces/Triagem';

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

  submitted: boolean = false;

  areaTriagem: Triagem[];
  triagemResultado: Triagem = {name: ""};
  triagemResultadoInt: number = 0;

  constructor(
    private tutorService: TutorService, 
    private fb: FormBuilder,
    private router: Router
    ) {
    this.tutorForm = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      nomep: ['', [Validators.required]],
      especie: ['', [Validators.required]],
      raca: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      cor: ['', [Validators.required]],
      eResultadoTriagem: ['', [Validators.required]]

    });

    this.areaTriagem = [
      {name: "Cardiologia"},
      {name: "Nefrologia"},
      {name: "Endocrinologia"},
      {name: "Fisioterapia"},
      {name: "Hematologia"},
      {name: "Odontologia"},
      {name: "Nutrologia"},
      {name: "Ortopedia"},
      {name: "Oftalmologia"}
    ]
  }

  eResultadoTriagemConverter(e: Triagem){
    switch(e.name){
      case "Cardiologia" : 
        return this.triagemResultadoInt = 0;
      case "Nefrologia": 
        return this.triagemResultadoInt = 1;
      case "Endocrinologia": 
        return this.triagemResultadoInt = 2;
      case "Fisioterapia": 
        return this.triagemResultadoInt = 3;
      case "Hematologia": 
        return this.triagemResultadoInt = 4;
      case "Odontologia": 
        return this.triagemResultadoInt = 5;
      case "Nutrologia" : 
        return this.triagemResultadoInt = 6;
      case "Ortopedia": 
        return this.triagemResultadoInt = 7;
      case "Oftalmologia" : 
        return this.triagemResultadoInt = 8;
      default:
        return "Triagem não feita";
    }
  }

  ngOnInit(): void {
  }

  submitCadastro() {
    this.submitted = true;

    if (this.tutorForm.invalid) {
      return;
    }else{
      this.cadastroTutor();
    }   
  }

  onReset(): void {
    this.submitted = false;
    this.tutorForm.reset();
  }

  cadastroTutor() {
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

    this.triagemResultado = this.tutorForm.value.eResultadoTriagem;
    this.eResultadoTriagemConverter(this.triagemResultado);
    
    this.tutorCriarDTO.pacienteList[0].eResultadoTriagem = this.triagemResultadoInt;

    this.tutorService.createTutor(this.tutorCriarDTO).subscribe(() => {
      this.router.navigate([""]);
    });
  }

}
