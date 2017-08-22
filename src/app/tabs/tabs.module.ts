
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TabComponent,
        TabsComponent
    ],
    declarations: [TabComponent, TabsComponent],
    providers: [],
})
export class TabModule { }
