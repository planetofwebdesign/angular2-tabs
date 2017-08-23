import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TabModule } from './tabs/tabs.module';

import { AppComponent } from './app.component';

import { TableComponent } from './table/table.component';
import { Table2Component } from './table-2/table-2.component';
import { TableService } from './table/table.service';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    Table2Component
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
