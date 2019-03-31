import { Component, OnInit } from '@angular/core';
import { BoardGameListService } from '../board-game-list/board-game-list.service';
import { MatDialogRef } from '@angular/material';
import { BoardGame } from '../board-game';


@Component({
  selector: 'app-dialog-new-board-game',
  templateUrl: './dialog-new-board-game.component.html',
  styleUrls: ['./dialog-new-board-game.component.css']
})
export class DialogNewBoardGameComponent implements OnInit {
  boardGame: BoardGame;

  constructor(private boardGameService: BoardGameListService,  public dialogRef: MatDialogRef<DialogNewBoardGameComponent>,
    ) { }

  ngOnInit() {
    this.boardGame = {
      id: undefined,
      imageUrl: undefined,
      title: undefined,
      type: undefined,
      minPlayers: undefined,
      maxPlayers: undefined,
      notes: undefined
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  boardGameIsValid() {
    return !(this.boardGame.imageUrl && this.boardGame.title && this.boardGame.type &&
      this.boardGame.minPlayers && this.boardGame.maxPlayers && this.boardGame.notes);
  }

}
