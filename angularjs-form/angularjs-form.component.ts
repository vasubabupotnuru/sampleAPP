import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Subscription, window} from "rxjs";
import * as console from "node:console";
import {AngularBridgeService} from "./angular-bridge.service";

@Component({
  selector: 'app-angularjs-form',
  templateUrl: './angularjs-form.component.html',
  styleUrls: ['./angularjs-form.component.css']
})
export class AngularjsFormComponent implements OnInit,AfterViewInit, OnDestroy {

  userFromAngularJs: any = {};
  sub!: Subscription;

  constructor(private bridge: AngularBridgeService, private host: ElementRef) {}

  ngAfterViewInit() {
    const shadowRoot = this.host.nativeElement.shadowRoot;

    // Load AngularJS from assets
    const angularJsScript = document.createElement('script');
    angularJsScript.src = 'assets/angularjs/angular.min.js';
    shadowRoot.appendChild(angularJsScript);

    angularJsScript.onload = () => {
      // Load legacy app.js from assets
      const legacyScript = document.createElement('script');
      legacyScript.src = 'assets/angularjs/app.js';
      shadowRoot.appendChild(legacyScript);
    };

    this.sub = this.bridge.user$.subscribe(data => {
      this.userFromAngularJs = data;
      console.log('From AngularJS:', data);
    });
  }

  updateAngularJsForm() {
    const latestData = {
      name: 'Pre-filled Name',
      email: 'prefilled@example.com',
      gender: 'Male'
    };
    this.bridge.updateFromAngularJs(latestData);

    const shadowRoot = this.host.nativeElement.shadowRoot;
    const ngScope = (window as any).angular.element(shadowRoot.querySelector('[ng-controller]')).scope();
    ngScope.$broadcast('updateFromAngular', latestData);
    ngScope.$applyAsync();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
  }
}
