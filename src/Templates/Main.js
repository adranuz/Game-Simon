import React from 'react';


function Main() {
  

  return (
    <main className='main'>
      <section className='board'>
        <div className='circle'>
          <div className='circle-text'>
            <h1>copycat</h1>
            <p>tap to play</p>
          </div>
        </div>
        <ul className='board_colors'>
            <li className='board_color' id='0'></li>
            <li className='board_color' id='1'></li>
            <li className='board_color' id='2'></li>
            <li className='board_color' id='3'></li>
        </ul>
      </section>
    </main>
  )
}
export default Main;