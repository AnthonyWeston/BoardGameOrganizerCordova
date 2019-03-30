import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGameEditComponent } from './board-game-edit.component';

describe('BoardGameEditComponent', () => {
  let component: BoardGameEditComponent;
  let fixture: ComponentFixture<BoardGameEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardGameEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
