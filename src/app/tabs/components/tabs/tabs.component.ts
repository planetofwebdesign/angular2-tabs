import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { ActivateTabService } from '../activateTab.service';
@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: ['tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

    constructor(private activateTabService: ActivateTabService) { }

    ngAfterContentInit() {

        const activeTab = this.tabs.filter(tab => {
          return tab.active;
        });
        if (activeTab.length === 0) {
            this.selectTab(this.tabs.first);
        } else {
            this.selectTab(activeTab[0]);
        }
     }

     selectTab(tab: TabComponent) {
         this.tabs.toArray().forEach( innerTab => innerTab.active = false);
         tab.active = true;
         this.activateTabService.setSelectedTab(tab);
     }
}
