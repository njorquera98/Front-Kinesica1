import { Routes } from '@angular/router';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { LogInComponent } from './log-in/log-in.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';

export const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'lista', component: ListaPacientesComponent },
  { path: 'paciente', component: NuevoPacienteComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
