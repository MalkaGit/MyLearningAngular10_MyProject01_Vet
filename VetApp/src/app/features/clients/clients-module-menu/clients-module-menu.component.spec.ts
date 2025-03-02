import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsModuleMenuComponent } from './clients-module-menu.component';

describe('ClientsModuleMenuComponent', () => {
  let component: ClientsModuleMenuComponent;
  let fixture: ComponentFixture<ClientsModuleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsModuleMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsModuleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
