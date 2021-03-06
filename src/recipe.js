import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {

    return ( 
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol> 
                <h2>Ingredients:</h2>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h1>Calories : {calories}</h1>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
};

export default Recipe;