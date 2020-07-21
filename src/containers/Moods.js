import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/emojiActions';
import { getFace, getEmojiState } from '../selectors/selectors';

const Moods = () => {
  const dispatch = useDispatch();
  const face = useSelector(getFace);
  const emojiState = useSelector(getEmojiState);

  return (
    <>
      <Controls>
        <button 
          onClick={() => dispatch(drinkCoffee())}
        >coffee - {emojiState.coffees}
        </button>
        <button 
          onClick={() => dispatch(eatSnack())}
        >snacks - {emojiState.snacks}
        </button>
        <button 
          onClick={() => dispatch(takeNap())}
        >naps - {emojiState.naps}
        </button>
        <button onClick={() => dispatch(study())}
        >studies - {emojiState.studies}
        </button>
      </Controls>
      <Face emoji={face} />
    </>
  );
};

export default Moods;
