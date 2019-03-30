import { Component, OnInit } from '@angular/core';
import { BoardGameListService } from './board-game-list.service';
import { ActivatedRoute } from '@angular/router';
import { BoardGame } from '../board-game'


@Component({
  selector: 'app-board-game-list',
  templateUrl: './board-game-list.component.html',
  styleUrls: ['./board-game-list.component.css']
})
export class BoardGameListComponent implements OnInit {
  boardGames: BoardGame[];
  selectedId: number;

  constructor(private boardGameListService: BoardGameListService, private activatedRoute: ActivatedRoute) { }

  delete(id: number) {
    this.boardGameListService.deleteBoardGame(id);
    this.refreshBoardGames();
  }

  refreshBoardGames() {
    this.boardGames = this.boardGameListService.getBoardGames();
  }

  ngOnInit() {
    this.refreshBoardGames();

    const idParam = this.activatedRoute.snapshot.paramMap.get('id')
    if (idParam) {
      this.selectedId = +idParam;
    }
  }
}
