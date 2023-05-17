import React, { useEffect, useState } from 'react';
import Card from './Card';

function Main() {

  const [foods, setFoods] = useState([]);

  useEffect(()=>{
    fetch('./food.json')
    .then(res => res.json())
    .then(data => setFoods(data.food));
  },[])

  return (
    <div className='main'>
      <div className='main-cards'>
        {foods.map(singleFood => <Card food={singleFood}></Card>)}
      </div>
    </div>
  );
}

export default Main;


/* 

  do not repeat yourself

*/