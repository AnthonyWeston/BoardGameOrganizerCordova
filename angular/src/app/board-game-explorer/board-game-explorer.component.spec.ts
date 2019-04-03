import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGameExplorerComponent } from './board-game-explorer.component';

describe('BoardGameExplorerComponent', () => {
  let component: BoardGameExplorerComponent;
  let fixture: ComponentFixture<BoardGameExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardGameExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGameExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
