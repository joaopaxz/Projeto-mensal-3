import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraListComponent } from './editora-list.component';

describe('EditoraListComponent', () => {
  let component: EditoraListComponent;
  let fixture: ComponentFixture<EditoraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditoraListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
