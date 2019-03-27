import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardGameListService {
  boardGames: any

  constructor() {
    this.boardGames = [{
      title: 'Exploding Kittens',
      imageUrl: 'https://explodingkittens.com/img/home/exploding-kittens-box_x2.png',
      type: 'Card game',
      minPlayers: 2,
      maxPlayers: 5,
      notes: 'This game also has a NSFW version!'
    },
    {
      title: 'Arkham Horror',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Arkham_Horror_revised_box.jpg/220px-Arkham_Horror_revised_box.jpg',
      type: 'Cooperative board game',
      minPlayers: 1,
      maxPlayers: 8,
      notes: 'This game takes a long time to play.'
    },
    {
      title: 'Clue',
      imageUrl: 'https://cf.geekdo-images.com/imagepagezoom/img/OxTzh1uxhMWt7gwC4PzWg8qCuTU=/fit-in/1200x900/filters:no_upscale()/pic884234.jpg',
      type: 'Competitive board game',
      minPlayers: 2,
      maxPlayers: 6,
      notes: 'The characters in this game have interesting names.'
    },
    {
      title: 'Taboo',
      imageUrl: 'https://cf.geekdo-images.com/imagepage/img/VSbgCEjQ8pM7YAz_uCyqhCbZcLM=/fit-in/900x600/filters:no_upscale()/pic4100847.jpg',
      type: 'Team word/card game',
      minPlayers: 4,
      maxPlayers: 'any',
      notes: 'This game requires two teams of players.'
    }];
  }

  getBoardGames() {
    return this.boardGames;
  }
}
