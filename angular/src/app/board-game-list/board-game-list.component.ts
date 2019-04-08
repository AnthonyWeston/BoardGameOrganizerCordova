import { DialogNewBoardGameComponent } from '../dialog-new-board-game/dialog-new-board-game.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { BoardGameListService } from './board-game-list.service';
import { ActivatedRoute } from '@angular/router';
import { BoardGame } from '../board-game';


@Component({
  selector: 'app-board-game-list',
  templateUrl: './board-game-list.component.html',
  styleUrls: ['./board-game-list.component.css']
})
export class BoardGameListComponent implements OnInit {
  boardGames: BoardGame[];
  selectedId: number;

  constructor(private boardGameListService: BoardGameListService, private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) { }

  delete(id: number) {
    this.boardGameListService.deleteBoardGame(id);
    this.refreshBoardGames();
  }

  refreshBoardGames() {
    this.boardGames = this.boardGameListService.getBoardGames();
  }

  showNewBoardGameDialog() {
    const dialogRef = this.dialog.open(DialogNewBoardGameComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe((boardGame: BoardGame) => {
      if (boardGame) {
        this.boardGameListService.createNewBoardGame(boardGame);
        this.boardGameListService.getBoardGames();
      }
    });
  }

  ngOnInit() {
    this.refreshBoardGames();

    const idParam = this.activatedRoute.snapshot.paramMap.get('id')
    if (idParam) {
      this.selectedId = +idParam;
    }
  }
}
