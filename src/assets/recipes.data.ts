import { TRecipe } from '../interfaces/recipes.interface'

import { v4 as uuidv4 } from 'uuid'

const sampleRecipes: TRecipe[] = [
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

export default sampleRecipes
