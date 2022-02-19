import React from 'react'

import { TRecipe } from '../../interfaces/recipes.interface'

import IngredientsList from '../ingredients-list/ingredients-list.component'

interface IProps {
    recipeObj: TRecipe
    handleDeleteRecipe: (id: string) => void
}

const Recipe: React.FC<IProps> = ({
    recipeObj: { id, cookTime, ingredients, instructions, name, servings },
    handleDeleteRecipe,
}): JSX.Element => {
    return (
        <div className="recipe">
            <div className="recipe__header">
                <h3 className="recipe__title">{name}</h3>
                <div>
                    <button className="btn btn--primary mr-1">Edit</button>
                    <button
                        className="btn btn--danger"
                        onClick={() => handleDeleteRecipe(id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Cook Time:</span>
                <span className="recipe__value">{cookTime}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Servings:</span>
                <span className="recipe__value">{servings}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Instructions:</span>
                <div className="recipe__value recipe__value--indented">
                    {instructions}
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Ingredirents:</span>
                <div className="recipe__value recipe__value--indented">
                    <IngredientsList ingredients={ingredients} />
                </div>
            </div>
        </div>
    )
}

export default Recipe
