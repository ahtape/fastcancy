import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedJobDescriptionComponent } from './created-job-description.component';

describe('CreatedJobDescriptionComponent', () => {
  let component: CreatedJobDescriptionComponent;
  let fixture: ComponentFixture<CreatedJobDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatedJobDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatedJobDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
