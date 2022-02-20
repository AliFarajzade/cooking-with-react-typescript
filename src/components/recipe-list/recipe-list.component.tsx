import React from 'react'

import Recipe from '../recipe/recipe.component'

import { useRecipeData } from '../../contexts/recipes.context'
import SearchBox from '../search-box/search-box.component'

const RecipeList: React.FC = (): JSX.Element => {
    const { recipes, handleAddRecipe, searchedRecipes } = useRecipeData()

    const recipeToShow = (): JSX.Element[] =>
        searchedRecipes.length !== 0
            ? searchedRecipes.map(recipeObj => (
                  <Recipe key={recipeObj.id} recipeObj={recipeObj} />
              ))
            : recipes.map(recipeObj => (
                  <Recipe key={recipeObj.id} recipeObj={recipeObj} />
              ))

    return (
        <div className="recipe-list">
            <SearchBox />

            {recipeToShow()}
            <div className="recipe-list__add-recipe-btn-container">
                <button onClick={handleAddRecipe} className="btn btn--primary">
                    Add Recipe
                </button>
            </div>
        </div>
    )
}

export default RecipeList
