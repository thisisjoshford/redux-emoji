import { drinkCoffee, eatSnack } from './emojiActions';

describe('emoji actions', () => {
  it('drinks a coffee', () => {
    const coffeeDrink = drinkCoffee();

    expect(coffeeDrink).toEqual({
      type: 'DRINK_COFFEE',
    });
  });

  it('drinks a snack', () => {
    const coffeeDrink = eatSnack();

    expect(coffeeDrink).toEqual({
      type: 'EAT_SNACK',
    });
  });


});
