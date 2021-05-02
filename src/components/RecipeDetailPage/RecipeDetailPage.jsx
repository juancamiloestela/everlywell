import React, { useState, useEffect } from 'react';
import styles from './RecipeDetailPage.module.scss';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useContainerQuery } from 'react-container-query';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getRecipe } from 'functions/recipes';

const containerQueries = {
  [styles.WidthBetween400And599]: {
    minWidth: 400,
    maxWidth: 599,
  },
  [styles.WidthLargerThan600]: {
    minWidth: 600,
  },
};

let favorites = JSON.parse(localStorage.getItem('favorites') || "[]");



function RecipeDetailPage() {
  
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isFavorite, setFavorite] = useState(favorites.includes(id));
  const [containerClassNames, containerRef] = useContainerQuery(containerQueries);

  useEffect(() => {
    async function fetchData(){
      const recipe = await getRecipe(id);
      // Map ingredients to a digested structure only once
      recipe.ingredients = Object.keys(recipe)
                            // get strIngredient[0-9] keys that are truthy
                            .filter(key => /strIngredient/.test(key) && recipe[key])
                            // for each of the Ingredients, get also the measurement
                            .map(key => {
                              return {
                                name: recipe[key],
                                measure: recipe[key.replace("Ingredient", "Measure")]
                              };
                            });

      setRecipe(recipe);
    }

    fetchData();
  }, [id]);


  useEffect(() => {
    if (isFavorite){
      !favorites.includes(id) && favorites.push(id);
    }else{
      favorites = favorites.filter(v => v !== id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [id, isFavorite]);


  return (
    <div ref={containerRef} className={classnames(styles.RecipeDetailPage, containerClassNames)}>
      
      <div className={styles.Header}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <FontAwesomeIcon 
          icon={faHeart} 
          className={
            classnames(styles.FavoriteIcon, {[styles.Active]: isFavorite})} 
          onClick={() => setFavorite(!isFavorite)}
          />
      </div>

      <div 
        alt={recipe.strMeal} 
        style={{backgroundImage: `url(${recipe.strMealThumb})`}} 
        className={styles.RecipeThumbnail}>
      </div>

      <div className={styles.Body}>
        <h1>{recipe.strMeal}</h1>

        <ul>
          {recipe.ingredients && recipe.ingredients.map((ingredient, i) => {
            return (
              <li key={i}>{ingredient.measure} {ingredient.name}</li>
            );
          })}
        </ul>

        <h2>Directions</h2>
        <div>{recipe.strInstructions}</div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
