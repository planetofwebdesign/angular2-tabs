import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-tab',
    templateUrl: 'tab.component.html',
    styleUrls: ['tab.component.scss']
})
export class TabComponent implements OnInit {
    @Input() active = false;
    // tslint:disable-next-line:no-input-rename
    @Input('tabTitle') title: string = 'Title';
    constructor() { }

    ngOnInit() { }
}
