import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/app/Interfaces/Tutor';
import { TutorDTO } from 'src/app/Interfaces/TutorDTO';
import { TutorService } from 'src/app/Services/Tutor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { PacienteService } from 'src/app/Services/paciente.service';
import { PacienteCriarDTO } from 'src/app/Interfaces/PacienteCriarDTO';
import { PacienteAdicionarDTO } from 'src/app/Interfaces/PacienteAdicionarDTO';
import { Paciente } from 'src/app/Interfaces/Paciente';
import { TutorEditarDTO } from 'src/app/Interfaces/TutorEditarDTO';
import { TutorEditar } from 'src/app/Interfaces/TutorEditar';
import { PacienteEditarDTO } from 'src/app/Interfaces/PacienteEditarDTO';
import { PacienteEditar } from 'src/app/Interfaces/PacienteEditar';
import { Triagem } from 'src/app/Interfaces/Triagem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutor: Tutor[] = [];
  display: boolean = false;
  tutorPacientes: Paciente[] = [];

  tutorEditar: TutorEditarDTO = new TutorEditar();
  pacienteEditar: PacienteEditarDTO = new PacienteEditar();

  displayAtualizar: boolean = false;
  tutorId: number | string = "";

  displayAtualizarPet: boolean = false;
  pacienteId: number | string = "";

  displayAdicionarPet: boolean = false;
  paciente: PacienteAdicionarDTO = {
    nome: "",
    especie: "",
    raca: "",
    idade: 0,
    peso: 0,
    cor: "",
    tutorId: "",
    eResultadoTriagem: 0
  }

  areaTriagem: Triagem[];
  triagemResultado: Triagem = {name: ""};
  triagemResultadoString: string = "";
  triagemResultadoInt: number = 0;

  tutorForm!: FormGroup;
  pacienteForm!: FormGroup;

  eResultadoTriagem(e: number){
    switch(e){
      case 0 : 
        return "Cardiologia";
      case 1 : 
        return "Nefrologia";
      case 2 : 
        return "Endocrinologia";
      case 3 : 
        return "Fisioterapia";
      case 4 : 
        return "Hematologia";
      case 5 : 
        return "Odontologia";
      case 6 : 
        return "Nutrologia";
      case 7 : 
        return "Ortopedia";
      case 8 : 
        return "Oftalmologia";
      default:
        return "Triagem não feita";
    }
  }

  constructor(private tutorService: TutorService,
    private pacienteService: PacienteService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private router: Router) {
    this.tutorForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      dataNascimento: ['']
    })

    this.pacienteForm = this.fb.group({
      nome: [''],
      especie: [''],
      raca: [''],
      idade: [''],
      peso: [''],
      cor: [''],
      eResultadoTriagem: ['']
    })

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
    this.getTutores();
  }

  getTutores() {
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

  atualizarTutorDialog(tutor: TutorEditarDTO) {
    this.tutorEditar = new TutorEditar();

    this.tutorEditar.id = tutor.id;
    this.tutorEditar.nome = tutor.nome;
    this.tutorEditar.cpf = tutor.cpf;
    this.tutorEditar.email = tutor.email;
    this.tutorEditar.telefone = tutor.telefone;
    this.tutorEditar.dataNascimento = tutor.dataNascimento;
    console

    this.displayAtualizar = true;
  }

  submitAtualizarTutor() {
    this.atualizarTutor();
  }

  atualizarTutor() {
    this.tutorService.updateTutor(this.tutorEditar.id, this.tutorForm.value)
      .subscribe(() => {
        //this.router.navigate([""]);
        window.location.reload();

      });
  }

  confirm(tutor: Tutor) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja desativar este tutor?",
      accept: () => {
        this.tutorId = tutor.id;
        this.tutorService.desativeTutor(this.tutorId)
          .subscribe(() => {
            this.getTutores();
          });
      }
    })
  }

  atualizarPetDialog(paciente: PacienteEditarDTO) {
    this.pacienteEditar = new PacienteEditar();

    this.pacienteEditar.id = paciente.id;
    this.pacienteEditar.nome = paciente.nome;
    this.pacienteEditar.especie = paciente.especie;
    this.pacienteEditar.raca = paciente.raca;
    this.pacienteEditar.idade = paciente.idade;
    this.pacienteEditar.peso = paciente.peso;
    this.pacienteEditar.cor = paciente.cor;

    this.pacienteEditar.eResultadoTriagem = paciente.eResultadoTriagem;

    this.displayAtualizarPet = true;
  }

  submitAtualizarPet(){
    this.atualizarPet();
  }

  atualizarPet() {
    this.triagemResultado = this.pacienteForm.value.eResultadoTriagem;
    this.eResultadoTriagemConverter(this.triagemResultado);
    this.pacienteForm.value.eResultadoTriagem = this.triagemResultadoInt;

    this.pacienteService.atualizarPet(this.pacienteEditar.id, this.pacienteForm.value).subscribe(() => {
      window.location.reload();
    });
    
  }

  adicionarPetDialogOficial(tutor: Tutor) {
    this.pacienteForm.reset();
    this.tutorId = "";
    this.tutorId = tutor.id;
    this.displayAdicionarPet = true;
  }

  buscarPets() {
    this.pacienteService.buscarPets().subscribe(r => console.log(r));
  }

  submitAdicionarPet() {
      this.paciente.nome = this.pacienteForm.value.nome;
      this.paciente.especie = this.pacienteForm.value.especie;
      this.paciente.raca = this.pacienteForm.value.raca;
      this.paciente.idade = this.pacienteForm.value.idade;
      this.paciente.peso = this.pacienteForm.value.peso;
      this.paciente.cor = this.pacienteForm.value.cor;
      this.paciente.tutorId = this.tutorId;

      this.triagemResultado = this.pacienteForm.value.eResultadoTriagem;
      this.eResultadoTriagemConverter(this.triagemResultado);

      this.paciente.eResultadoTriagem = this.triagemResultadoInt;

      this.pacienteService.criarPet(this.paciente).subscribe(() => {
        window.location.reload();
      });
      
  }

  confirm2(paciente: Paciente) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja desativar este paciente?",
      accept: () => {
        this.pacienteId = paciente.id;
        this.pacienteService.excluirPet(this.pacienteId)
          .subscribe(() => {
            window.location.reload();
          });
      }
    })
  }
}
