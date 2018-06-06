import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsActions, NewsActionTypes } from './news.actions';
import { News } from './news';

export interface State {
  news: News[];
}

export const initialState: State = {
  news: [{ title: 'Taxation is getting even higher' }, { title: 'Weather is cold, again' }]
};

export const getNewsFeature = createFeatureSelector<State>('news');
export const getNewsSelector = createSelector(
  getNewsFeature,
  state => state.news
);

export function reducer(state = initialState, action: NewsActions): State {
  switch (action.type) {

    case NewsActionTypes.SetNews:
      return {
        news: [...action.news]
      };

    case NewsActionTypes.AddNews:
      return {
        news: [{ title: 'Lappeenrannassa sataa' }, ...state.news]
      };

    default:
      return state;
  }
}
