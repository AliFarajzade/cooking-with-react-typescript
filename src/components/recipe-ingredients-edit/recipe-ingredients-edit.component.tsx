import React from 'react'

import { TIngredients } from '../../interfaces/recipes.interface'

import { useRecipeData } from '../../contexts/recipes.context'

const RecipeIngredientEdit: React.FC<{ ingredientsObj: TIngredients }> = ({
    ingredientsObj,
}) => {
    const { id, name, amount } = ingredientsObj
    const {
        handleIngredientsChange,
        selectedRecipeObj,
        handleDeleteIngredient,
    } = useRecipeData()

    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (selectedRecipeObj) {
            handleIngredientsChange(id, selectedRecipeObj, {
                ...ingredientsObj,
                [e.target.name]: e.target.value,
            })
        }
    }

    return (
        <>
            <input
                name="name"
                onChange={handleChangeInputValue}
                value={name}
                className="recipe-edit__input"
                type="text"
            />
            <input
                name="amount"
                onChange={handleChangeInputValue}
                value={amount}
                className="recipe-edit__input"
                type="text"
            />
            <button
                onClick={() => handleDeleteIngredient(id)}
                className="btn btn--danger"
            >
                &times;
            </button>
        </>
    )
}

export default RecipeIngredientEdit
