import { Component, OnInit } from '@angular/core';
import { BoardGameSearchEntry } from '../board-game-search-entry';
import { BoardGameSearchService } from '../services/board-game-search.service';
import { BoardGame } from '../board-game';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogSearchResultComponent } from '../dialog-search-result/dialog-search-result.component';


@Component({
  selector: 'app-board-game-explorer',
  templateUrl: './board-game-explorer.component.html',
  styleUrls: ['./board-game-explorer.component.css']
})
export class BoardGameExplorerComponent implements OnInit {
  searchText: string;
  boardGameSearchResults: BoardGameSearchEntry[];

  constructor(private boardGameSearchService: BoardGameSearchService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  getSearchResults(searchText: string) {
    this.boardGameSearchService.getSearchResults(searchText).subscribe(
      results => this.boardGameSearchResults = results,
      error => {throw new Error(error);}
    );
  }

  showSearchResultDialog(apiId: number) : void {
    const dialogRef = this.dialog.open(DialogSearchResultComponent, {
      data: { apiId }
    });

    dialogRef.afterClosed().subscribe((boardGame: BoardGame) => {

    });
  }

}
