import emojiReducer from './emojiReducer';
import { drinkCoffee } from '../actions/emojiActions';

describe('emoji reducers', () => {
  it('handles drink coffee action', () => {
    const state = {
      coffee: 0
    };
    const drink1Coffee = drinkCoffee();

    const newState = emojiReducer(state, drink1Coffee);

    expect(newState).toEqual({ coffee: 1 });
  });
});
