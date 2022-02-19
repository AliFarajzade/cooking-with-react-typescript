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

export type TContextValues = {
    handleRecipeAdd: () => void
    handleDeleteRecipe: (id: string) => void
    handleRecipeSelectID: (id: string) => void
    handleClearSelectedRecipeID: () => void
    handleRecipeChange: (id: string, newRecipeObj: TRecipe) => void
    handleIngredientsChange: (
        id: string,
        selectedRecipeObj: TRecipe,
        newIngredientObj: TIngredients
    ) => void
    recipes: TRecipe[]
    selectedRecipeObj?: TRecipe | undefined
    selectedRecipeID: string
}
