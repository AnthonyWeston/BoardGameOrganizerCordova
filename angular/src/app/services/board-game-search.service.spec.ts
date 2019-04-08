import { TestBed } from '@angular/core/testing';

import { BoardGameSearchService } from './board-game-search.service';

describe('BoardGameSearchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardGameSearchService = TestBed.get(BoardGameSearchService);
    expect(service).toBeTruthy();
  });
});
