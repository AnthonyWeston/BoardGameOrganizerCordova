import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { BoardGameSearchService } from '../services/board-game-search.service';
import { BoardGame } from '../board-game';
import { BoardGameListService } from '../board-game-list/board-game-list.service';

@Component({
  selector: 'app-dialog-search-result',
  templateUrl: './dialog-search-result.component.html',
  styleUrls: ['./dialog-search-result.component.css']
})
export class DialogSearchResultComponent implements OnInit {
  boardGame: BoardGame;

  constructor(@Inject(MAT_DIALOG_DATA, ) private data: any, private boardGameSearchService: BoardGameSearchService,
              private boardGameListservice: BoardGameListService, private dialogRef: MatDialogRef<DialogSearchResultComponent>,) { }

  ngOnInit() {
    this.boardGameSearchService.getBoardGame(this.data.apiId)
      .subscribe(
      boardGame => this.boardGame = boardGame,
      error => { throw new Error(error); }
    )
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addToCollection(boardGame: BoardGame) {
    this.boardGameListservice.createNewBoardGame(this.boardGame);
    this.closeDialog();
  }
}
