export const isTired = state => 
  state.emojiState.coffees < 1 && state.naps < 1;
export const isHyper = state => 
  state.emojiState.coffees > 3;
export const isEducated = state => 
  state.emojiState.studies > 2;
export const isHungry = state => 
  state.emojiState.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

export const getEmojiState = state => state.emojiState;
