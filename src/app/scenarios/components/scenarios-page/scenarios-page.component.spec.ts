import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariosPageComponent } from './scenarios-page.component';

describe('ScenariosPageComponent', () => {
  let component: ScenariosPageComponent;
  let fixture: ComponentFixture<ScenariosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenariosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
