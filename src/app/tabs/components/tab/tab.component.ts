import { Component, Input } from '@angular/core';

import { ITab } from './tab.model';

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.scss']
})
export class TabComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('tabConfig') tabConfig: ITab;
  constructor() { }

  get title(): string {
    return this.tabConfig.title;
  }

  set title(title: string) {
    this.tabConfig.title = title;
  }

  get id(): number {
    return this.tabConfig.id;
  }

  set id(id: number) {
    this.tabConfig.id = id;
  }
  get active(): boolean {
    return this.tabConfig.active;
  }

  set active(active: boolean) {
    this.tabConfig.active = active;
  }

}

