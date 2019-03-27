import { Component, OnInit } from '@angular/core';
import { BoardGameListService } from './board-game-list.service'

@Component({
  selector: 'app-board-game-list',
  templateUrl: './board-game-list.component.html',
  styleUrls: ['./board-game-list.component.css']
})
export class BoardGameListComponent {
  boardGames: Array<any>;

  constructor(boardGameListService: BoardGameListService) {
    this.boardGames = boardGameListService.getBoardGames();
  }

  onDeleted(index: number) {
    this.boardGames.splice(index, 1);
  }

}
