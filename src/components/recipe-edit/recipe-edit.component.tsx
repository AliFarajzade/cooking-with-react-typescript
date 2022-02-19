import React from 'react'

import RecipeIngredientEdit from '../recipe-ingredients-edit/recipe-ingredients-edit.component'

import { useRecipeData } from '../../contexts/recipes.context'

const RecipeEdit = () => {
    const {
        selectedRecipeObj,
        handleClearSelectedRecipeID,
        handleRecipeChange,
    } = useRecipeData()

    if (!selectedRecipeObj) return null

    const handleChangeInputValue = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        handleRecipeChange(selectedRecipeObj.id, {
            ...selectedRecipeObj,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button
                    onClick={handleClearSelectedRecipeID}
                    className="btn recipe-edit__remove-button"
                >
                    &times;
                </button>
            </div>
            <div className="recipe-edit__details-grid">
                <label htmlFor="name" className="recipe-edit__label">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="recipe-edit__input"
                    value={selectedRecipeObj?.name}
                    onChange={handleChangeInputValue}
                />
                <label htmlFor="cookTime" className="recipe-edit__label">
                    Cook Time
                </label>
                <input
                    type="text"
                    name="cookTime"
                    id="cookTime"
                    className="recipe-edit__input"
                    value={selectedRecipeObj?.cookTime}
                    onChange={handleChangeInputValue}
                />
                <label htmlFor="servings" className="recipe-edit__label">
                    Servings
                </label>
                <input
                    type="number"
                    min="1"
                    name="servings"
                    id="servings"
                    className="recipe-edit__input"
                    value={selectedRecipeObj?.servings}
                    onChange={handleChangeInputValue}
                />
                <label htmlFor="instructions" className="recipe-edit__label">
                    Instructions
                </label>
                <textarea
                    name="instructions"
                    className="recipe-edit__input"
                    id="instructions"
                    value={selectedRecipeObj?.instructions}
                    onChange={handleChangeInputValue}
                ></textarea>
            </div>
            <br />
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {selectedRecipeObj?.ingredients?.map(ingredientsObj => (
                    <RecipeIngredientEdit
                        key={ingredientsObj.id}
                        ingredientsObj={ingredientsObj}
                    />
                ))}
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary">Add Ingredient</button>
            </div>
        </div>
    )
}

export default RecipeEdit
