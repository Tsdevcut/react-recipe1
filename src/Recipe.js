import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="card-block col-md-6">
      <h1>{title}</h1>
      <div className="containerblock">
        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Calories </strong>
              {calories}
            </p>
            <img src={image} alt={title} />
          </div>
          <div className="col-md-6">
            <ol className="left-a">
              {ingredients.map(ingredient => (
                <li className="left">{ingredient.text}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
