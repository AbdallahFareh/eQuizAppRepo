import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantExamComponent } from './etudiant-exam.component';

describe('EtudiantExamComponent', () => {
  let component: EtudiantExamComponent;
  let fixture: ComponentFixture<EtudiantExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantExamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
