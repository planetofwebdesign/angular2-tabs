import { Subscription } from 'rxjs/Rx';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { ActivateTabService } from '../tabs/components/activateTab.service';
import { TableService } from '../table/table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-2',
  templateUrl: './table-2.component.html',
  styleUrls: ['./table-2.component.css']
})
export class Table2Component implements OnInit {

  subscription: Subscription;
  records: any[] =  [];

  constructor(
    private tableService: TableService,
    private activateTabService: ActivateTabService
    ) {

      this.subscription = this.activateTabService.getSelectedTab().subscribe( tab => {
        if (tab && tab.active && tab.id === 2) {
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
