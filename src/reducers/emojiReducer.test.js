import emojiReducer from './emojiReducer';
import { drinkCoffee, eatSnack } from '../actions/emojiActions';

describe('emoji reducers', () => {
  it('handles drink coffee action', () => {
    const state = { coffee: 0 };
    const drink1Coffee = drinkCoffee();
    const newState = emojiReducer(state, drink1Coffee);
    expect(newState).toEqual({ coffee: 1 });
  });

  it('handles eat a snack action', () => {
    const state = { snacks: 0 };
    const eatASnack = eatSnack();
    const newState = emojiReducer(state, eatASnack);
    expect(newState).toEqual({ snacks: 1 });
  });
});
