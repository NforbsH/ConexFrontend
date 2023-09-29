import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerserviceDashboardComponent } from './customerservice-dashboard.component';

describe('CustomerserviceDashboardComponent', () => {
  let component: CustomerserviceDashboardComponent;
  let fixture: ComponentFixture<CustomerserviceDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerserviceDashboardComponent]
    });
    fixture = TestBed.createComponent(CustomerserviceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
