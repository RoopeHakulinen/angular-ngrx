import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { zip } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { NewsActionTypes, SetNews } from './news.actions';


@Injectable()
export class NewsEffects {

  @Effect()
  effect$ = this.actions$
    .ofType(NewsActionTypes.LoadNews)
    .pipe(
      switchMap(() => this.httpClient.get('https://hacker-news.firebaseio.com/v0/topstories.json')),
      map((ids: number[]) => ids.slice(0, 10)),
      map((ids: number[]) => ids.map(id => this.httpClient.get<{ title: string }>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))),
      switchMap(arr => zip(...arr)),
      tap((result) => console.log(result)),
      map((result) => new SetNews(result))
    );

  constructor(private actions$: Actions, private httpClient: HttpClient) {
  }
}
