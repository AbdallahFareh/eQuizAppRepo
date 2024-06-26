import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassExamComponent } from './pass-exam.component';

describe('PassExamComponent', () => {
  let component: PassExamComponent;
  let fixture: ComponentFixture<PassExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassExamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
