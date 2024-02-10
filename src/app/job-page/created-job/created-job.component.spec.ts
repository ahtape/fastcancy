import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedJobComponent } from './created-job.component';

describe('CreatedJobComponent', () => {
  let component: CreatedJobComponent;
  let fixture: ComponentFixture<CreatedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatedJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
