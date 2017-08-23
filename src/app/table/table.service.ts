import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
@Injectable()
export class TableService {

  constructor() { }

  getData(): Observable<any[]> {
    const data: any[] = [{
      fname: 'vikas',
      lname: 'yadav',
      email: 'vikasya@cybage.com'
    }];

    return Observable.of<any[]>(data);
  }

  getData2(): Observable<any[]> {
    const data: any[] = [{
      fname: 'Ekta',
      lname: 'Singh',
      email: 'Ektas@cybage.com'
    }];

    return Observable.of<any[]>(data);
  }
}
