const initialState = { coffee: 0 };

export default function emojiReducer(state = initialState, action) {
  switch(action.type) {
    case 'DRINK_COFFEE':
      return { coffee: state.coffee + 1 };
  }
}

