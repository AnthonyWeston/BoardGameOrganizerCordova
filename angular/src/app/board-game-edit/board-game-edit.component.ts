import { Component, OnInit } from '@angular/core';
import { BoardGameListService } from '../board-game-list/board-game-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import { BoardGame } from '../board-game'


@Component({
  selector: 'app-board-game-edit',
  templateUrl: './board-game-edit.component.html',
  styleUrls: ['./board-game-edit.component.css']
})
export class BoardGameEditComponent implements OnInit {
  id: number;
  boardGame: BoardGame;
  title: string;
  type: string;
  minPlayers: string | number;
  maxPlayers: string | number;
  notes: string;

  constructor(private boardGameService: BoardGameListService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.boardGame = this.boardGameService.getBoardGame(this.id);
    this.title = this.boardGame.title;
    this.type = this.boardGame.type;
    this.minPlayers = this.boardGame.minPlayers;
    this.maxPlayers = this.boardGame.maxPlayers;
    this.notes = this.notes;
  }

  save() {
    this.boardGameService.saveBoardGame({
      id: this.id,
      imageUrl: this.boardGame.imageUrl,
      title: this.title,
      type: this.type,
      minPlayers: this.minPlayers,
      maxPlayers: this.maxPlayers,
      notes: this.notes
    });

    this.router.navigate(['../..', this.id], { relativeTo: this.route })
  }
}
