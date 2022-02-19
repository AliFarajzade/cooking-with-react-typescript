import React from 'react'

import { IIngredients } from '../../interfaces/recipes.interface'

import Ingredient from '../ingredient/ingredient.component'

const IngredientsList: React.FC<IIngredients> = ({ ingredients }) => {
    return (
        <div className="ingredient-grid">
            {ingredients.map(ingredientsObj => (
                <Ingredient
                    key={ingredientsObj.id}
                    ingredientsObj={ingredientsObj}
                />
            ))}
        </div>
    )
}

export default IngredientsList
