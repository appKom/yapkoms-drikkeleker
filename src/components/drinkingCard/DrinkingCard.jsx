import "./DrinkingCard.css"

const DrinkingCard = ({name, image, description}) => {
    return (
      <nav>
        <div id="card-container">
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
            
        </div>
      </nav>
    );
  };
  
  export default DrinkingCard;