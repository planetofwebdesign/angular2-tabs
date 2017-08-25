import { TabConfig } from './tabs/components/tab/TabConfig';
import { ITab } from './tabs/components/tab/tab.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tabConfig1: ITab = new TabConfig('Tab1', 1, true);

  tabConfig2: ITab = new TabConfig('Tab2', 2, false);

}
