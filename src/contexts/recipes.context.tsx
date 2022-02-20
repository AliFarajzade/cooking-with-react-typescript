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
    handleAddRecipe: () => {},
    handleRecipeSelectID: (id: string) => {},
    handleClearSelectedRecipeID: () => {},
    handleRecipeChange: (id: string, newRecipeObj: TRecipe) => {},
    handleIngredientsChange: (
        id: string,
        selectedRecipeObj: TRecipe,
        newIngredientObj: TIngredients
    ) => {},
    handleAddIngredient: () => {},
    handleDeleteIngredient: (id: string) => {},
    handleSearchRecipe: (searchedTerm: string) => {},
    selectedRecipeID: '',
    recipes: [],
    searchedRecipes: [],
})

export const useRecipeData = () => useContext(RecipesContext)

const RecipesContextProvider: React.FC = ({ children }): JSX.Element => {
    const [recipes, setRecipes] = useState<IRecipes['recipes']>(sampleRecipes)
    const [searchedRecipes, setSearchedRecipes] = useState<
        IRecipes['recipes'] | []
    >([])
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

    const handleAddRecipe = () => {
        console.log('handleRecipeAdd', recipes)

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

        setRecipes([newRecipe, ...recipes])
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

    const handleRecipeChange = (id: string, newRecipeObj: TRecipe) => {
        const newRecipes = [...recipes]
        const index = newRecipes.findIndex(recipeObj => recipeObj.id === id)
        newRecipes[index] = newRecipeObj
        setRecipes(newRecipes)
    }

    const handleAddIngredient = () => {
        const newIngredient: TIngredients = {
            id: uuidv4(),
            name: 'New Ing',
            amount: '1',
        }

        if (!selectedRecipeObj) return

        handleRecipeChange(selectedRecipeID, {
            ...selectedRecipeObj,
            ingredients: [...selectedRecipeObj?.ingredients, newIngredient],
        })
    }

    const handleDeleteIngredient = (id: string) => {
        if (!selectedRecipeObj) return

        const newIngredients = selectedRecipeObj.ingredients.filter(
            ingredientObj => ingredientObj.id !== id
        )

        handleRecipeChange(selectedRecipeID, {
            ...selectedRecipeObj,
            ingredients: newIngredients,
        })
    }

    const handleDeleteRecipe = (id: string) => {
        const newRecipes = recipes.filter(recipeObj => recipeObj.id !== id)
        setRecipes(newRecipes)
    }

    const handleRecipeSelectID = (id: string) => {
        console.log('handleRecipeSelectID', recipes)

        setSelectedRecipeID(id)
    }

    const handleClearSelectedRecipeID = () => {
        console.log('handleClearSelectedRecipeID', recipes)

        setSelectedRecipeID('')
    }

    const handleSearchRecipe = (searchedTerm: string) => {
        if (!searchedTerm) return setSearchedRecipes([])

        const foundedRecipes = recipes.filter(
            recipeObj =>
                recipeObj.name
                    .toLocaleLowerCase()
                    .includes(searchedTerm.toLocaleLowerCase()) && recipeObj
        )

        setSearchedRecipes(foundedRecipes)
    }

    const contextValues: TContextValues = {
        handleDeleteRecipe,
        handleAddRecipe,
        handleRecipeSelectID,
        handleClearSelectedRecipeID,
        handleRecipeChange,
        handleIngredientsChange,
        handleAddIngredient,
        handleDeleteIngredient,
        handleSearchRecipe,
        selectedRecipeObj,
        selectedRecipeID,
        recipes,
        searchedRecipes,
    }

    return (
        <RecipesContext.Provider value={contextValues}>
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesContextProvider
