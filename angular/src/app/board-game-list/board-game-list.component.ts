import { Component, OnInit } from '@angular/core';
import { BoardGameListService } from './board-game-list.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-board-game-list',
  templateUrl: './board-game-list.component.html',
  styleUrls: ['./board-game-list.component.css']
})
export class BoardGameListComponent implements OnInit {
  boardGames: Array<any>;
  selectedId: number;

  constructor(private boardGameListService: BoardGameListService, private activatedRoute: ActivatedRoute) {

  }

  onDeleted(index: number) {
    this.boardGames.splice(index, 1);
  }

  ngOnInit() {
    this.boardGames = this.boardGameListService.getBoardGames();

    const idParam = this.activatedRoute.snapshot.paramMap.get('id')
    if (idParam) {
      this.selectedId = +idParam;
    }
  }
}
