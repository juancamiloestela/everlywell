import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.scss';
import RecipeListItem from 'components/RecipeListItem';
import { getRandomRecipes } from 'functions/recipes';
import GlobalRecipeSearch from 'components/GlobalRecipeSearch';



function MainPage() {
  
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData(){
      setRecipes( await getRandomRecipes(3) );
    }

    fetchData();
  }, []);


  return (
    <div className={styles.MainPage}>
      
      <header className={styles.Header}>
        <div className={styles.HeaderLogo}></div>
      </header>
      
      <div className={styles.Title}>Recipes of the day</div>
      
      {recipes && recipes.map((recipe, i) => <RecipeListItem key={i} recipe={recipe} />)}

      <GlobalRecipeSearch />
    </div>
  );
}

export default MainPage;
