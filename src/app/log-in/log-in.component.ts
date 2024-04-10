import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,

    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  public loginValid = true;
  public onSubmit(): void {
    this.loginValid = true;
  }
}
