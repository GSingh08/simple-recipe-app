import React from 'react';
import style from './recipe.module.css'


const Recipe = ({title,calories,image, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <p>{calories}</p>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.recipe} src={image} alt=""/>
            
            <p>{url}</p>
        </div>
    );
}

export default Recipe;