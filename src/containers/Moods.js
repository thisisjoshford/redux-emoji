import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/emojiActions';


const Moods = () => {
  const dispatch = useDispatch();

  // const { coffees, snacks, naps, studies } = this.state;
  const face = getFace(this.state);

  return (
    <>
      <Controls>
        <button 
          onClick={() => dispatch(drinkCoffee())}
        >coffee - {coffees}
        </button>
        <button 
          onClick={() => dispatch(eatSnack())}
        >snacks - {snacks}
        </button>
        <button 
          onClick={() => dispatch(takeNap())}
        >naps - {naps}
        </button>
        <button onClick={() => dispatch(study())}
        >studies - {studies}
        </button>
      </Controls>
      <Face emoji={face} />
    </>
  );
};
