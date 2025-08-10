import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AngularBridgeService {

  private userSource = new BehaviorSubject<any>({});
  user$ = this.userSource.asObservable();

  // Update from AngularJS → Angular
  updateFromAngularJs(data: any) {
    this.userSource.next(data);
  }

  // Fetch latest data for AngularJS → Angular
  getLatest() {
    return this.userSource.value;
  }
}
