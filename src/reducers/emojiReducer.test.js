import emojiReducer from './emojiReducer';
import { drinkCoffee, eatSnack, takeNap } from '../actions/emojiActions';

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

  it('handles take a nap action', () => {
    const state = { naps: 0 };
    const takeANap = takeNap();
    const newState = emojiReducer(state, takeANap);
    expect(newState).toEqual({ naps: 1 });
  });
});
