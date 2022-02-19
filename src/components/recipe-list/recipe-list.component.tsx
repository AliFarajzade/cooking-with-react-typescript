import React from 'react'

import Recipe from '../recipe/recipe.component'

import { useRecipeData } from '../../contexts/recipes.context'

const RecipeList: React.FC = (): JSX.Element => {
    const { recipes, handleRecipeAdd } = useRecipeData()

    return (
        <div className="recipe-list">
            {recipes.map(recipeObj => (
                <Recipe key={recipeObj.id} recipeObj={recipeObj} />
            ))}
            <div className="recipe-list__add-recipe-btn-container">
                <button onClick={handleRecipeAdd} className="btn btn--primary">
                    Add Recipe
                </button>
            </div>
        </div>
    )
}

export default RecipeList
