import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
  ],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent {
  paciente: any; // Aquí almacenarás los datos del paciente obtenidos de la base de datos
  sesiones: any;
  constructor() { }

  ngOnInit(): void {
    // Aquí deberías obtener los datos del paciente de la base de datos
    this.obtenerDatosDelPaciente(); // Llamada a la función para obtener los datos
    this.obtenerDatosDeLasSesiones();
  }

  obtenerDatosDeLasSesiones() {
    console.log(this.sesiones)
    this.sesiones = [
      {
        sesion: 1,
        fecha: '11-04-2024',
        hora: '18:00',
        descripcion: `- Kinegun en EEII
- Magcell ambas rodillas
- Lacrosse ball ambos pies
- TRX squat iso 90° flex  5/5"-7"
- TRX pull y squat 5/10+10
- Propiocepcion Mini Bosu con sticks de apoyo
- Hip Thrust con bench y piso antideslizante + KB 8 5/10
- Neck Massager`
      },
      {
        sesion: 2,
        fecha: '12-04-2024',
        hora: '18:00',
        descripcion: `- Ejercicio 1
- Ejercicio 2
- Ejercicio 3
- Ejercicio 4
- Ejercicio 5`
      }
      // Puedes agregar más sesiones aquí según sea necesario
    ].reverse();
  }

  obtenerDatosDelPaciente() {
    // Simulación de obtención de datos del paciente de la base de datos
    this.paciente = {
      nombre: 'Juan',
      apellido: 'Pérez',
      edad: 30,
      telefono: '976332705',
      correo: 'juan@example.com',
      prevision: 'Fonasa',
      fechaNacimiento: '01-01-1990',
      fechaIngreso: '01-04-2024',
      evaluacion: 'Sin antecedentes, no refiere dolor',
      objetivo: 'Tratar una lesión en la rodilla',
      diagnostico: 'Lesión de ligamento cruzado anterior'
    };
  }
}
