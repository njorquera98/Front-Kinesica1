import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    MaterialModule
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
