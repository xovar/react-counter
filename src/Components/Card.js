
function Card(props) {

  return (
    <div className='card'>
        <div className='card-body'>
            <div className='card-img'><img src={props.food.pic} alt="" /> </div>
            <div className='card-info'>
                <div className='card-title'>{props.food.name}</div>
                <div className='card-text'>{props.food.text}</div>
                <div className='btn'>
                  <button>${props.food.price}</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
