import { AddNews } from './news.actions';
import { reducer, initialState } from './news.reducer';

describe('News Reducer', () => {
  describe('add action', () => {
    it('should return the initial state', () => {
      const action = new AddNews();

      const result = reducer(initialState, action);

      expect(result.news.length).toBe(initialState.news.length + 1);
      expect(result.news[0].title).toBe('Lappeenrannassa sataa');
    });
  });
});
