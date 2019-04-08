import { Component, OnInit } from '@angular/core';
import { BoardGameListService } from '../board-game-list/board-game-list.service';
import { MatDialogRef } from '@angular/material';
import { BoardGame } from '../board-game';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog-new-board-game',
  templateUrl: './dialog-new-board-game.component.html',
  styleUrls: ['./dialog-new-board-game.component.css']
})
export class DialogNewBoardGameComponent implements OnInit {
  boardGame: BoardGame;
  newBoardGameForm = new FormGroup({
    imageUrl: new FormControl(''),
    title: new FormControl('', Validators.required),
    minPlayers: new FormControl(''),
    maxPlayers: new FormControl(''),
    notes: new FormControl(''),
  });

  constructor(private boardGameService: BoardGameListService,  public dialogRef: MatDialogRef<DialogNewBoardGameComponent>,
    ) { }

  ngOnInit() {
    this.boardGame = {
      id: undefined,
      imageUrl: undefined,
      title: undefined,
      minPlayers: undefined,
      maxPlayers: undefined,
      notes: undefined
    };
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
