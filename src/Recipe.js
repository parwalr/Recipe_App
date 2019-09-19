import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, cautions }) => {
  return (
    <div className={style.recipe}>
      <div className={(style.info, "d-inline-block")}>
        <h1>{title}</h1>
        <p>{calories} calories</p>
        <h4>Ingredients:</h4>
        <ul>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
        <h4>Dietary Cautions:</h4>
        <ul>
          {cautions.map(caution => (
            <li>{caution}</li>
          ))}
        </ul>
      </div>
      <div className={(style.image, "d-inline-block align-top mt-5 mx-5")}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Recipe;
