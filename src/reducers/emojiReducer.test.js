import emojiReducer from './emojiReducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/emojiActions';

describe('emoji reducers', () => {
  it('handles drink coffee action', () => {
    const state = { 
      coffees: 0, 
      snacks: 0, 
      naps: 2, 
      studies: 3 
    };
    const drink1Coffee = drinkCoffee();
    const newState = emojiReducer(state, drink1Coffee);
    expect(newState).toEqual({ 
      coffees: 1, 
      snacks: 0, 
      naps: 2,
      studies: 3 
    });
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

  it('handles study action', () => {
    const state = { studies: 0 };
    const studyStuff = study();
    const newState = emojiReducer(state, studyStuff);
    expect(newState).toEqual({ studies: 1 });
  });

});
