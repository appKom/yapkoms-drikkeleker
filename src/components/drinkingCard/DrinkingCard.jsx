import "./DrinkingCard.css"

const DrinkingCard = ({id, name, image, description}) => {
    return (
      <nav>
        <a href={`/game/${id}`} id="card-container">
            <div id="image-container">
                <img src={image}></img>
            </div>
            <div id="bottom-container">
                <div id="name">
                    <p>{name}</p>
                </div>
                <div id="description">
                    {description}
                </div>
            </div>
            
        </a>
      </nav>
    );
  };
  
  export default DrinkingCard;