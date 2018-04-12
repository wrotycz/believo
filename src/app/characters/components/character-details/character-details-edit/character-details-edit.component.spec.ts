import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsEditComponent } from './character-details-edit.component';

describe('CharacterDetailsEditComponent', () => {
  let component: CharacterDetailsEditComponent;
  let fixture: ComponentFixture<CharacterDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
