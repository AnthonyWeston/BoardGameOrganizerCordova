import { Component, OnInit } from '@angular/core';
import { BoardGameListService } from './board-game-list.service'

@Component({
  selector: 'app-board-game-list',
  templateUrl: './board-game-list.component.html',
  styleUrls: ['./board-game-list.component.css']
})
export class BoardGameListComponent implements OnInit {
  boardGames: Array<any>;

  constructor(private boardGameListService: BoardGameListService) {

  }

  onDeleted(index: number) {
    this.boardGames.splice(index, 1);
  }

  ngOnInit() {
    this.boardGames = this.boardGameListService.getBoardGames();
  }
}
