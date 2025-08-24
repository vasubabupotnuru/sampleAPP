import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-angularjs-form',
  standalone: true,
  imports: [],
  templateUrl: './angularjs-form.component.html',
  styleUrl: './angularjs-form.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AngularjsFormComponent {
  todo: any = {}; 
  todos: any[] = [];
  
  updateAngularJsForm() {
    const latestData = {
      name: 'Pre-filled TODO Task',
      description: 'This is a pre-filled task description',
      priority: 'high'
    };
    
    const ngScope = (window as any).angular
      .element(document.querySelector('[ng-controller="TodoController"]'))
      .scope();
      
    if (ngScope) {
      ngScope.$broadcast('updateFromAngular', latestData);
      ngScope.$applyAsync();
    }
  }
}
