import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInAllTutorialWithCommentsComponent } from './all-in-all-tutorial-with-comments.component';

describe('AllInAllTutorialWithCommentsComponent', () => {
  let component: AllInAllTutorialWithCommentsComponent;
  let fixture: ComponentFixture<AllInAllTutorialWithCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInAllTutorialWithCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInAllTutorialWithCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
