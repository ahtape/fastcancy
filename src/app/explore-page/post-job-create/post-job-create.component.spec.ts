import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobCreateComponent } from './post-job-create.component';

describe('PostJobCreateComponent', () => {
  let component: PostJobCreateComponent;
  let fixture: ComponentFixture<PostJobCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostJobCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostJobCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
