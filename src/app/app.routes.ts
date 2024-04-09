import { Routes } from '@angular/router';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
  { path: 'paciente', component: NuevoPacienteComponent },
  { path: 'login', component: LogInComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
