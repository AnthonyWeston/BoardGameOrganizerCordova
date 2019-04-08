import { Component, OnInit } from '@angular/core';
import { BoardGameSearchEntry } from '../board-game-search-entry';
import { BoardGameSearchService } from '../services/board-game-search.service';

@Component({
  selector: 'app-board-game-explorer',
  templateUrl: './board-game-explorer.component.html',
  styleUrls: ['./board-game-explorer.component.css']
})
export class BoardGameExplorerComponent implements OnInit {
  searchText: string;
  boardGameSearchResults: BoardGameSearchEntry[];

  constructor(private boardGameSearchService: BoardGameSearchService) { }

  ngOnInit() {
  }

  getSearchResults(searchText: string) {
    this.boardGameSearchService.getSearchResults(searchText).subscribe(
      results => this.boardGameSearchResults = results,
      error => {throw new Error(error);}
    );
  }

  openDialog(id: number) : void {
    console.log(id);
  }

}
