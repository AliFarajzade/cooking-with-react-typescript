export type TIngredients = {
    id: string
    name: string
    amount: string
}

export interface IIngredients {
    ingredients: TIngredients[]
}

export type TRecipe = {
    id: string
    name: string
    servings: number
    cookTime: string
    instructions: string
    ingredients: IIngredients['ingredients']
}

export interface IRecipes {
    recipes: TRecipe[]
}
