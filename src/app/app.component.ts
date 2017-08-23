import { ITab } from './tabs/components/tab/tab.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tabConfig1: ITab = {
    title: 'Tab1',
    id: 1,
    active: true
  };

  tabConfig2: ITab = {
    title: 'Tab2',
    id: 2
  };

}
