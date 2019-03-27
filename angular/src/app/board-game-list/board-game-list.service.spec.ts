import { TestBed } from '@angular/core/testing';

import { BoardGameListService } from './board-game-list.service';

describe('BoardGameListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardGameListService = TestBed.get(BoardGameListService);
    expect(service).toBeTruthy();
  });
});
