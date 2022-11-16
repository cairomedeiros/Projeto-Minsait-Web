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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutor: Tutor[] = [];
  display: boolean = false;
  tutorPacientes: Paciente[] = [];

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

  tutorForm!: FormGroup;
  pacienteForm!: FormGroup;

  constructor(private tutorService: TutorService, private pacienteService: PacienteService, private fb: FormBuilder, private confirmationService: ConfirmationService) {
    this.tutorForm = this.fb.group({
      nome: [''],
      cpf: [''],
      endereco: [''],
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

  atualizarTutorDialog(tutor: Tutor) {
    this.tutorForm.reset();
    this.tutorId = tutor.id;
    this.displayAtualizar = true;
  }

  submitAtualizarTutor() {
    this.atualizarTutor();
  }

  atualizarTutor() {
    this.tutorService.updateTutor(this.tutorId, this.tutorForm.value)
      .subscribe(res => console.log(res));
  }

  confirm(tutor: Tutor) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja desativar este tutor?",
      accept: () => {
        this.tutorId = tutor.id;
        this.tutorService.desativeTutor(this.tutorId)
          .subscribe(res => console.log(res));
      }
    })
  }

  atualizarPetDialog(paciente: Paciente) {
    this.pacienteForm.reset();
    this.pacienteId = paciente.id;
    this.displayAtualizarPet = true;
  }

  atualizarPet() {
    this.tutor
  }

  submitAtualizarPet() {
    this.pacienteService.atualizarPet(this.pacienteId, this.pacienteForm.value).subscribe(res => console.log(res));
  }

  adicionarPetDialogOficial(tutor: Tutor) {
    this.pacienteForm.reset();
    this.tutorId = "";
    this.tutorId = tutor.id;
    this.displayAdicionarPet = true;
  }

  submitAdicionarPet() {
    this.paciente.nome = this.pacienteForm.value.nome;
    this.paciente.especie = this.pacienteForm.value.especie;
    this.paciente.raca = this.pacienteForm.value.raca;
    this.paciente.idade = this.pacienteForm.value.idade;
    this.paciente.peso = this.pacienteForm.value.peso;
    this.paciente.cor = this.pacienteForm.value.cor;
    this.paciente.tutorId = this.tutorId;
    this.paciente.eResultadoTriagem = this.pacienteForm.value.eResultadoTriagem;

    this.pacienteService.criarPet(this.paciente).subscribe(res => console.log(res));
  }

  confirm2(paciente: Paciente) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja desativar este paciente?",
      accept: () => {
        this.pacienteId = paciente.id;
        this.pacienteService.excluirPet(this.pacienteId)
          .subscribe(res => console.log(res));
      }
    })
  }
}
