import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: ['tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

    constructor() { }

    ngAfterContentInit() {
        const activeTab = this.tabs.filter(tab => tab.active);
        if (activeTab.length === 0) {
            this.selectTab(this.tabs.first);
        }
     }

     selectTab(tab: TabComponent) {
         this.tabs.toArray().forEach( innerTab => innerTab.active = false);
         tab.active = true;

     }
}
