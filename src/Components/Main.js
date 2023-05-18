import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useFood } from '../Context/FoodProvider';

function Main() {

  const { state: {foods} } = useFood();

  return (
    <div className='main'>
      <div className='main-cards'>
        {foods.map(singleFood => <Card key={singleFood.id} food={singleFood}></Card>)}
      </div>
    </div>
  );
}

export default Main;


/* 

  do not repeat yourself

*/