import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.scss';
import classnames from 'classnames';
import { useContainerQuery } from 'react-container-query';
import RecipeListItem from 'components/RecipeListItem';
import { getRandomRecipes } from 'functions/recipes';
import GlobalRecipeSearch from 'components/GlobalRecipeSearch';

const containerQueries = {
  [styles.WidthBetween400And599]: {
    minWidth: 400,
    maxWidth: 599,
  },
  [styles.WidthLargerThan600]: {
    minWidth: 600,
  },
};


function MainPage() {
  
  const [recipes, setRecipes] = useState([]);
  const [containerClassNames, containerRef] = useContainerQuery(containerQueries);

  useEffect(() => {
    async function fetchData(){
      setRecipes( await getRandomRecipes(3) );
    }

    fetchData();
  }, []);


  return (
    <div ref={containerRef} className={classnames(styles.MainPage, containerClassNames)}>
      
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
