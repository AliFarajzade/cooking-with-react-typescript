import React, { useState, useContext, createContext, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'

import {
    TContextValues,
    IRecipes,
    TRecipe,
    TIngredients,
} from '../interfaces/recipes.interface'

import sampleRecipes from '../assets/recipes.data'

const RecipesContext = createContext<TContextValues>({
    handleDeleteRecipe: (id: string) => {},
    handleRecipeAdd: () => {},
    handleRecipeSelectID: (id: string) => {},
    handleClearSelectedRecipeID: () => {},
    handleRecipeChange: (id: string, newRecipeObj: TRecipe) => {},
    handleIngredientsChange: (
        id: string,
        selectedRecipeObj: TRecipe,
        newIngredientObj: TIngredients
    ) => {},
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
        console.log('handleRecipeAdd')
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
        console.log('handleRecipeSelectID')

        setSelectedRecipeID(id)
    }

    const handleClearSelectedRecipeID = () => {
        console.log('handleClearSelectedRecipeID')

        setSelectedRecipeID('')
    }

    const handleRecipeChange = (id: string, newRecipeObj: TRecipe) => {
        const newRecipes = [...recipes]
        const index = newRecipes.findIndex(recipeObj => recipeObj.id === id)
        newRecipes[index] = newRecipeObj
        setRecipes(newRecipes)
    }

    const handleIngredientsChange = (
        id: string,
        selectedRecipeObj: TRecipe,
        newIngredientObj: TIngredients
    ) => {
        const newIngredients = [...selectedRecipeObj.ingredients]
        const index = selectedRecipeObj.ingredients.findIndex(
            ingredientObj => ingredientObj.id === id
        )
        newIngredients[index] = newIngredientObj
        handleRecipeChange(selectedRecipeObj.id, {
            ...selectedRecipeObj,
            ingredients: newIngredients,
        })
    }

    const contextValues: TContextValues = {
        handleDeleteRecipe,
        handleRecipeAdd,
        handleRecipeSelectID,
        handleClearSelectedRecipeID,
        handleRecipeChange,
        handleIngredientsChange,
        recipes,
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
