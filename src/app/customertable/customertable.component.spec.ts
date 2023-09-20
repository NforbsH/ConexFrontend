import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertableComponent } from './customertable.component';

describe('CustomertableComponent', () => {
  let component: CustomertableComponent;
  let fixture: ComponentFixture<CustomertableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomertableComponent]
    });
    fixture = TestBed.createComponent(CustomertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
