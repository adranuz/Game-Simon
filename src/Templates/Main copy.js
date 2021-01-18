import React, { useState } from 'react';


function Main() {
  let lvl;
  let sequence;
  let buttons = [0,1,2,3];

  const [playing, setPlaying] = useState(false);
  const [showedLvl, setShowedLvl] = useState(0);
  const [iluminated, setIluminated] = useState('#');

  const handleGame = () => {
    initialize();
    nextLvl();
  };
  const initialize = () => {
    setPlaying(true);
    setShowedLvl(1);
    sequence = makeSequence();
    lvl = 1;
  };
  const makeSequence = () => {
    return new Array(10).fill(0).map((_ => Math.floor(Math.random() * 4)));
  };
  const nextLvl = () => {
    iterateSequence();
  };
  const iterateSequence =  () => {
    for (var i = 0; i < 10; i++) {
      // setTimeout(() => cleanBtn(sequence[i]), 1000*i);
      cleanBtn(sequence[i])
    };
  };
  const cleanBtn = async(number) => {
    await setTimeout(() => setIluminated(number), 1000);
    await setTimeout(() => setIluminated('#'), 2000);
  }
  const handleClick = (numberBtn) => {
    console.log(`click on button ${numberBtn}`)
  }
  return (
    <main className='main'>
      <section className='board'>
        <div className='circle'>
        {playing ?
          <div className='circle-text'>
            <h1>brilla</h1>
            <p>{iluminated}</p>
          </div>
          :
          <div className='circle-text' onClick={handleGame}>
            <h1>copycat</h1>
            <p>tap to play</p>
          </div>
        }
        </div>
        <ul className='board_colors'>
            <li className={`board_color`} id='0'></li>
            <li className='board_color' id='1'></li>
            <li className='board_color' id='2'></li>
            <li className='board_color' id='3'></li>
        </ul>
      </section>
    </main>
  )
}

export default Main;