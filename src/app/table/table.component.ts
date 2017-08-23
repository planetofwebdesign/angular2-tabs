import { Subscription } from 'rxjs/Rx';
import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnInit,
    OnDestroy
} from '@angular/core';

import { TableService } from './table.service';
import { ActivateTabService } from '../tabs/components/activateTab.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  @Input() loadData = false;
  records: any[] = [];
  subscription: Subscription;

  constructor(
    private tableService: TableService,
    private activateTabService: ActivateTabService
    ) {

      this.subscription = this.activateTabService.getSelectedTab().subscribe( tab => {
        if (tab && tab.active && tab.id === 1 ) {
          debugger;
         this.tableService.getData().subscribe(data => {
           this.records = data;
         });
       }
    });

    }

  ngOnInit() {

  }

 ngOnDestroy() {
     this.subscription.unsubscribe();
  }
}
