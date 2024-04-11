import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';

export interface PeriodicElement {
  nombre: string;
  apellido: string;
  telefono: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nombre: 'Paloma', apellido: 'Alvarez', telefono: 974547947 },
  { nombre: 'Ignacio', apellido: 'Ancoma', telefono: 975217404 },
  { nombre: 'Valentina', apellido: 'Aravena', telefono: 977605142 },
  { nombre: 'Matias', apellido: 'Arenas', telefono: 963007630 },
  { nombre: 'Williams', apellido: 'Astudillos', telefono: 941010715 },
  { nombre: 'Maria', apellido: 'Aviles', telefono: 972906408 },
  { nombre: 'Jose', apellido: 'Balcarse', telefono: 961749470 },
  { nombre: 'Fernanda', apellido: 'Becerra', telefono: 991255542 },
  { nombre: 'Alvaro', apellido: 'Bernal', telefono: 964188311 },
  { nombre: 'Pamela', apellido: 'Bonilla', telefono: 939699747 },
];

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.css'
})
export class ListaPacientesComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
