
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ActivateTabService } from './components/activateTab.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TabComponent,
        TabsComponent
    ],
    declarations: [TabComponent, TabsComponent],
    providers: [ActivateTabService],
})
export class TabModule { }
