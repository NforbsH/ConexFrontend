import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryagentDashboardComponent } from './deliveryagent-dashboard.component';

describe('DeliveryagentDashboardComponent', () => {
  let component: DeliveryagentDashboardComponent;
  let fixture: ComponentFixture<DeliveryagentDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryagentDashboardComponent]
    });
    fixture = TestBed.createComponent(DeliveryagentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
