import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-nuevo-paciente',

  standalone: true,
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css'],
  imports: [
    RouterOutlet,
    RouterLink,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class NuevoPacienteComponent {
}
