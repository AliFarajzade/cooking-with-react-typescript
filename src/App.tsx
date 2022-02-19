import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import RecipeList from './components/recipe-list/recipe-list.component'

import { IRecipes } from './interfaces/recipes.interface'

import './css/app.css'

const sampleRecipes: IRecipes['recipes'] = [
    {
        id: uuidv4(),
        name: 'Plain Chicken',
        servings: 3,
        cookTime: '1:45',
        instructions:
            '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
        ingredients: [
            {
                id: uuidv4(),
                name: 'Salt',
                amount: '2 Tbs',
            },
            {
                id: uuidv4(),
                name: 'Chicken',
                amount: '2 Pounds',
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'Plain Pork',
        servings: 5,
        cookTime: '0:45',
        instructions:
            '1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork',
        ingredients: [
            {
                id: uuidv4(),
                name: 'Paprika',
                amount: '1 Tbs',
            },
            {
                id: uuidv4(),
                name: 'Pork',
                amount: '1.5 Pounds',
            },
        ],
    },
]

const App: React.FC = (): JSX.Element => {
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

    return (
        <RecipeList
            handleDeleteRecipe={handleDeleteRecipe}
            handleRecipeAdd={handleRecipeAdd}
            recipes={recipes}
        />
    )
}

export default App
