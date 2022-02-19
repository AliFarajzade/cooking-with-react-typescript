import React from 'react'

import { TIngredients } from '../../interfaces/recipes.interface'

const RecipeIngredientEdit: React.FC<{ ingredientsObj: TIngredients }> = ({
    ingredientsObj: { name, amount },
}) => {
    return (
        <>
            <input value={name} className="recipe-edit__input" type="text" />
            <input value={amount} className="recipe-edit__input" type="text" />
            <button className="btn btn--danger">&times;</button>
        </>
    )
}

export default RecipeIngredientEdit
