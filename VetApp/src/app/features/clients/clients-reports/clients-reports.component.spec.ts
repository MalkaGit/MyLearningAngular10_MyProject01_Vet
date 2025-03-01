import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsReportsComponent } from './clients-reports.component';

describe('ClientsReportsComponent', () => {
  let component: ClientsReportsComponent;
  let fixture: ComponentFixture<ClientsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
