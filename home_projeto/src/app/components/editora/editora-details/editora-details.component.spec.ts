import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraDetailsComponent } from './editora-details.component';

describe('EditoraDetailsComponent', () => {
  let component: EditoraDetailsComponent;
  let fixture: ComponentFixture<EditoraDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditoraDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditoraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
