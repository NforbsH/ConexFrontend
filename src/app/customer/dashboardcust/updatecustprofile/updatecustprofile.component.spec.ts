import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecustprofileComponent } from './updatecustprofile.component';

describe('UpdatecustprofileComponent', () => {
  let component: UpdatecustprofileComponent;
  let fixture: ComponentFixture<UpdatecustprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecustprofileComponent]
    });
    fixture = TestBed.createComponent(UpdatecustprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
