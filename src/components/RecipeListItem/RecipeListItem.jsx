import styles from './RecipeListItem.module.scss';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { useContainerQuery } from 'react-container-query';


const containerQueries = {
  [styles.WidthBetween400And599]: {
    minWidth: 400,
    maxWidth: 599,
  },
  [styles.WidthSmallerOrEqualTo500]: {
    
  },
  [styles.WidthLargerThan500]: {
    minWidth: 600,
  },
};


function RecipeListItem(props){

  const [containerClassNames, containerRef] = useContainerQuery(containerQueries);

  return (
    <div ref={containerRef} className={classnames(styles.RecipeListItem, containerClassNames)}>
      <Link className={styles.RecipeLink} to={`/recipe/${props.recipe.idMeal}`}>
        <div className={styles.RecipeData}>
  		    <div className={styles.RecipeName}>
            {props.recipe.strMeal}
          </div>
          <div className={styles.RecipeInstructions}>
            {props.recipe.strInstructions.substr(0, 270)}...
          </div>
        </div>
				<div 
          alt={props.recipe.strMeal} 
					style={{backgroundImage: `url(${props.recipe.strMealThumb})`}} 
					className={styles.RecipeThumbnail}>
        </div>
      </Link>
    </div>
  );
}

export default RecipeListItem;