import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { bindNodeCallback } from 'rxjs';
import { parseString } from 'xml2js';
import { BoardGameSearchEntry } from '../board-game-search-entry';

@Injectable({
  providedIn: 'root'
})
export class BoardGameSearchService {
  private BoardGameSearchUrl = 'https://www.boardgamegeek.com/xmlapi2/search';
  private BoardGameThingUrl = 'https://www.boardgamegeek.com/xmlapi2/thing';

  constructor(private http: HttpClient) { }

  getSearchResults(searchText: string) {
    const params = new HttpParams().set('type', 'boardgame,boardgameexpansion')
      .set('query', searchText);

    return this.http.get(this.BoardGameSearchUrl, { params, responseType: 'text' })
    .pipe(switchMap(xmlString => bindNodeCallback(parseString)(xmlString)))
    .pipe(map(parsedXml => parsedXml.items.item))
    .pipe(map(parsedArray => parsedArray.map(item => ({
      id: item.$.id,
      title: item.name[0].$.value,
    })).sort((boardGameEntry1: BoardGameSearchEntry, boardGameEntry2: BoardGameSearchEntry) =>
      boardGameEntry1.title.localeCompare(boardGameEntry2.title))
    ));
  }

  getBoardGame(apiId: number) {
    const params = new HttpParams().set('id', apiId.toString());

    return this.http.get(this.BoardGameThingUrl, { params, responseType: 'text' })
    .pipe(switchMap(xmlString => bindNodeCallback(parseString)(xmlString)))
    .pipe(map(parsedXml => parsedXml.items.item[0]))
    .pipe(map(item => ({
        id: undefined,
        title: item.name[0].$.value,
        imageUrl: item.image[0],
        minPlayers: item.minplayers[0].$.value,
        maxPlayers: item.maxplayers[0].$.value,
    })));
  }
}
