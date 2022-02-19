import React, { useState, useContext, createContext, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'

import {
    TContextValues,
    IRecipes,
    TRecipe,
} from '../interfaces/recipes.interface'

import sampleRecipes from '../assets/recipes.data'

const RecipesContext = createContext<TContextValues>({
    handleDeleteRecipe: (id: string) => {},
    handleRecipeAdd: () => {},
    handleRecipeSelectID: (id: string) => {},
    selectedRecipeID: '',
    recipes: [],
})

export const useRecipeData = () => useContext(RecipesContext)

const RecipesContextProvider: React.FC = ({ children }): JSX.Element => {
    const [recipes, setRecipes] = useState<IRecipes['recipes']>(sampleRecipes)
    const [selectedRecipeID, setSelectedRecipeID] = useState<string>('')

    const selectedRecipeObj: TRecipe | undefined = recipes.find(
        recipeObj => recipeObj.id === selectedRecipeID
    )

    // For initialize
    useEffect(() => {
        const localRecipesList = localStorage.getItem('recipesList')
        if (localRecipesList) setRecipes(JSON.parse(localRecipesList))
    }, [])

    // For recipe list changes
    useEffect(() => {
        localStorage.setItem('recipesList', JSON.stringify(recipes))
    }, [recipes])

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

    const handleRecipeSelectID = (id: string) => {
        setSelectedRecipeID(id)
    }

    const contextValues: TContextValues = {
        recipes,
        handleDeleteRecipe,
        handleRecipeAdd,
        handleRecipeSelectID,
        selectedRecipeObj,
        selectedRecipeID,
    }

    return (
        <RecipesContext.Provider value={contextValues}>
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesContextProvider
