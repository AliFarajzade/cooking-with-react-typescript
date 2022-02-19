import React from 'react'

import Recipe from '../recipe/recipe.component'

import { IRecipes } from '../../interfaces/recipes.interface'

interface IProps {
    recipes: IRecipes['recipes']
    handleRecipeAdd: () => void
    handleDeleteRecipe: (id: string) => void
}

const RecipeList: React.FC<IProps> = ({
    recipes,
    handleRecipeAdd,
    handleDeleteRecipe,
}): JSX.Element => {
    return (
        <div className="recipe-list">
            {recipes.map(recipeObj => (
                <Recipe
                    key={recipeObj.id}
                    handleDeleteRecipe={handleDeleteRecipe}
                    recipeObj={recipeObj}
                />
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
