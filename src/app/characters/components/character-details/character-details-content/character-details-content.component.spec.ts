import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsContentComponent } from './character-details-content.component';

describe('CharacterDetailsContentComponent', () => {
  let component: CharacterDetailsContentComponent;
  let fixture: ComponentFixture<CharacterDetailsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
