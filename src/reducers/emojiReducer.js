const initialState = { 
  coffee: 0, 
  snacks: 0,
  naps: 0
};

export default function emojiReducer(state = initialState, action) {
  switch(action.type) {
    case 'DRINK_COFFEE':
      return { coffee: state.coffee + 1 };
    case 'EAT_SNACK':
      return { snacks: state.snacks + 1 };
  }
}

