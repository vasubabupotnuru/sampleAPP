import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { AngularBridgeService } from '../angular-bridge.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-angularjs-form',
  standalone: true,
  imports: [],
  templateUrl: './angularjs-form.component.html',
  styleUrl: './angularjs-form.component.css',
  encapsulation: ViewEncapsulation.None // <-- disable Shadow DOM
})
export class AngularjsFormComponent {
  user: any;
  updateAngularJsForm() {
    const latestData = {
      name: 'Pre-filled Name',
      email: 'prefilled@example.com',
      gender: 'Male'
    };
    const ngScope = (window as any).angular
      .element(document.querySelector('[ng-controller]'))
      .scope();
    ngScope.$broadcast('updateFromAngular', latestData);
    ngScope.$applyAsync();
  }
}
