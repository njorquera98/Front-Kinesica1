import { Routes } from '@angular/router';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { LogInComponent } from './log-in/log-in.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { PacienteComponent } from './paciente/paciente.component';
import { HorarioComponent } from './horario/horario.component';

export const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'lista', component: ListaPacientesComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'nuevo-paciente', component: NuevoPacienteComponent },
  { path: 'horario', component: HorarioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
