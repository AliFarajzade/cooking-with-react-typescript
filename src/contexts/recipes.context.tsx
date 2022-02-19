import React, { useState, useContext, createContext } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { TContextValues, IRecipes } from '../interfaces/recipes.interface'

import sampleRecipes from '../assets/recipes.data'

const RecipesContext = createContext<TContextValues>({
    handleDeleteRecipe: (id: string) => {},
    handleRecipeAdd: () => {},
    recipes: [],
})

export const useRecipeData = () => useContext(RecipesContext)

const RecipesContextProvider: React.FC = ({ children }): JSX.Element => {
    const [recipes, setRecipes] = useState<IRecipes['recipes']>(sampleRecipes)

    const handleRecipeAdd = () => {
        const newRecipe = {
            id: uuidv4(),
            name: 'New Meal',
            servings: 1,
            cookTime: '00:00',
            instructions: 'Inst.',
            ingredients: [
                {
                    id: uuidv4(),
                    name: 'New Name',
                    amount: 'New Amount',
                },
            ],
        }

        setRecipes([...recipes, newRecipe])
    }

    const handleDeleteRecipe = (id: string) => {
        const newRecipes = recipes.filter(recipeObj => recipeObj.id !== id)
        setRecipes(newRecipes)
    }

    const contextValues: TContextValues = {
        // setRecipes,
        recipes,
        handleDeleteRecipe,
        handleRecipeAdd,
    }

    return (
        <RecipesContext.Provider value={contextValues}>
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesContextProvider
