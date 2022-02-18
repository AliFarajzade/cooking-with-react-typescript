import React from 'react'

import Recipe from '../recipe/recipe.component'

import { IRecipes } from '../../interfaces/recipes.interface'

const RecipeList: React.FC<IRecipes> = ({ recipes }): JSX.Element => {
    return (
        <div>
            {recipes.map(({ id, ...otherRecipeProperties }) => (
                <Recipe key={id} {...otherRecipeProperties} />
            ))}
        </div>
    )
}

export default RecipeList
