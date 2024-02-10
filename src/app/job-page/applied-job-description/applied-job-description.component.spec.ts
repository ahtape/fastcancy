import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobDescriptionComponent } from './applied-job-description.component';

describe('AppliedJobDescriptionComponent', () => {
  let component: AppliedJobDescriptionComponent;
  let fixture: ComponentFixture<AppliedJobDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppliedJobDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppliedJobDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
