import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ActivateTabService {

  private selected: Subject<any> = new BehaviorSubject<any>(null);

  setSelectedTab(tab: any) {
    this.selected.next(tab);
  }

  getSelectedTab(): Observable<any> {
    return this.selected.asObservable();
  }
  constructor() { }


}
