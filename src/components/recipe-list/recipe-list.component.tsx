import React from 'react'

import Recipe from '../recipe/recipe.component'

import { IRecipes } from '../../interfaces/recipes.interface'

const RecipeList: React.FC<IRecipes> = ({ recipes }): JSX.Element => {
    return (
        <div className="recipe-list">
            {recipes.map(({ id, ...otherRecipeProperties }) => (
                <Recipe key={id} {...otherRecipeProperties} />
            ))}
            <div className="recipe-list__add-recipe-btn-container">
                <button className="btn btn--primary">Add Recipe</button>
            </div>
        </div>
    )
}

export default RecipeList
