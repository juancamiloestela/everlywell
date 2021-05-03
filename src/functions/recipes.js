import axios from 'axios';

export async function getRecipe(id){
  const response = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
  return response.data.meals[0];
}

export async function getRandomRecipe(){
  const cacheBuster = String(Math.random()).replace("0.", "");
  const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php?t=" + cacheBuster);
  return response.data.meals[0];
}

export async function getRandomRecipes(n){
  const recipes = [...Array(n)].map(i => getRandomRecipe());
  try {
    return await Promise.all(recipes);
  }catch(error){
    return null;
  }
}

export async function searchRecipeByName(search){
  const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search);
  return response.data.meals;
}
