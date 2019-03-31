import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewBoardGameComponent } from './dialog-new-board-game.component';

describe('DialogNewBoardGameComponent', () => {
  let component: DialogNewBoardGameComponent;
  let fixture: ComponentFixture<DialogNewBoardGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewBoardGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewBoardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
