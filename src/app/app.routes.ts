import { Routes } from '@angular/router';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'paciente', component: NuevoPacienteComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
