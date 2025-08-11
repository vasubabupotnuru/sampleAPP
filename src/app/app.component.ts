import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularjsFormComponent } from './angularjs-form/angularjs-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularjsFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample';
}
