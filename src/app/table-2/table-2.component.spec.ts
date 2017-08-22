/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Table-2Component } from './table-2.component';

describe('Table-2Component', () => {
  let component: Table-2Component;
  let fixture: ComponentFixture<Table-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
