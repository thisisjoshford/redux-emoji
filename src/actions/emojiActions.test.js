import { drinkCoffee, eatSnack, takeNap } from './emojiActions';

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
});

