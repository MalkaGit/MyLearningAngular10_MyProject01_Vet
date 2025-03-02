import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsModuleContainerComponent } from './clients-module-container.component';

describe('ClientsModuleContainerComponent', () => {
  let component: ClientsModuleContainerComponent;
  let fixture: ComponentFixture<ClientsModuleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsModuleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsModuleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
