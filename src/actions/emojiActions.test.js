import { drinkCoffee, eatSnack, takeNap, study } from './emojiActions';

describe('emoji actions', () => {
  it('drinks a coffee', () => {
    const coffeeDrink = drinkCoffee();

    expect(coffeeDrink).toEqual({
      type: 'DRINK_COFFEE',
    });
  });

  it('drinks a snack', () => {
    const eatsASnack = eatSnack();

    expect(eatsASnack).toEqual({
      type: 'EAT_SNACK',
    });
  });

  it('takes a nap', () => {
    const takesANap = takeNap();

    expect(takesANap).toEqual({
      type: 'TAKE_NAP',
    });
  });

  it('does some studying', () => {
    const studySomeStuff = study();

    expect(studySomeStuff).toEqual({
      type: 'STUDY',
    });
  });

});

