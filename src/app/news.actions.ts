import { Action } from '@ngrx/store';
import { News as NewsType } from './news';

export enum NewsActionTypes {
  LoadNews = '[News] Load News',
  SetNews = '[News] Set News',
  AddNews = '[News] Add News'
}

export class News implements Action {
  readonly type = NewsActionTypes.LoadNews;
}

export class SetNews implements Action {
  readonly type = NewsActionTypes.SetNews;

  constructor(public news: NewsType[]) {}
}

export class AddNews implements Action {
  readonly type = NewsActionTypes.AddNews;
}

export type NewsActions = News | AddNews | SetNews;
