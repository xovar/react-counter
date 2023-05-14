import React from 'react';

function Card() {
  return (
    <div className='card'>
        <div className='card-body'>
            <div className='card-img'><img src="./Ellipse-1.png" alt="" /> </div>
            <div className='card-info'>
                <div className='card-title'>Boiled Eggs</div>
                <div className='card-text'>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. </div>
                <div className='btn'>
                  <button>$10.00</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
