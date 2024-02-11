import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedJobListComponent } from './created-job-list.component';

describe('CreatedJobListComponent', () => {
  let component: CreatedJobListComponent;
  let fixture: ComponentFixture<CreatedJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatedJobListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatedJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
