import { Injectable } from '@angular/core';
import { BoardGame } from '../board-game'


@Injectable({
  providedIn: 'root'
})
export class BoardGameListService {
  boardGames: BoardGame[];

  constructor() {
    this.boardGames = [{
      id: 0,
      title: 'Exploding Kittens',
      imageUrl: 'https://explodingkittens.com/img/home/exploding-kittens-box_x2.png',
      type: 'Card game',
      minPlayers: 2,
      maxPlayers: 5,
      notes: 'This game has lots of cats!'
    },
    {
      id: 1,
      title: 'Arkham Horror',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Arkham_Horror_revised_box.jpg/220px-Arkham_Horror_revised_box.jpg',
      type: 'Cooperative board game',
      minPlayers: 1,
      maxPlayers: 8,
      notes: 'This game takes a long time to play.'
    },
    {
      id: 2,
      title: 'Clue',
      imageUrl: 'https://cf.geekdo-images.com/imagepagezoom/img/OxTzh1uxhMWt7gwC4PzWg8qCuTU=/fit-in/1200x900/filters:no_upscale()/pic884234.jpg',
      type: 'Competitive board game',
      minPlayers: 2,
      maxPlayers: 6,
      notes: 'The characters in this game have interesting names.'
    },
    {
      id: 3,
      title: 'Taboo',
      imageUrl: 'https://cf.geekdo-images.com/imagepage/img/VSbgCEjQ8pM7YAz_uCyqhCbZcLM=/fit-in/900x600/filters:no_upscale()/pic4100847.jpg',
      type: 'Team word/card game',
      minPlayers: 4,
      maxPlayers: 'any',
      notes: 'This game requires two teams of players.'
    }];
  }

  getBoardGames() {
    return this.boardGames.sort((game1: BoardGame, game2: BoardGame) => game1.title.localeCompare(game2.title));
  }

  getBoardGame(id: number) {
    return this.boardGames[id];
  }

  saveBoardGame(newBoardGame: any) {
    const id = newBoardGame.id;
    this.boardGames[id] = newBoardGame;
  }

  deleteBoardGame(id: number) {
    const index = this.boardGames.map((boardGame: any) => boardGame.id).indexOf(id);
    this.boardGames.splice(index, 1);
  }

  createNewBoardGame(boardGame: BoardGame) {
    const id = Math.max.apply(this.boardGames.map((boardGame: BoardGame) => boardGame.id));
    this.boardGames.push({
      id: id + 1,
      title: boardGame.title,
      imageUrl: boardGame.imageUrl,
      type: boardGame.type,
      minPlayers: boardGame.minPlayers,
      maxPlayers: boardGame.maxPlayers,
      notes: boardGame.notes
    });
  }
}
