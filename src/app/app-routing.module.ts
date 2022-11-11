import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PatientComponent } from './Pages/patient/patient.component';
import { RegisterComponent } from './Pages/register/register.component';
import { TutorComponent } from './Pages/tutor/tutor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'tutors', component: TutorComponent},
  {path: 'patients', component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
