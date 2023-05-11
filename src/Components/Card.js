const Card = (props) =>{

   console.log(props);
    return(
        <div class="card" style={{width: "18rem"}}>
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.cardTitle}</h5>
          <p class="card-text">{props.cardText}</p>
          <a href="#" class="btn btn-primary">{props.cardName}</a>
        </div>
      </div>
    )
}

export default Card;