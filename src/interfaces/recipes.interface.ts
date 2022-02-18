export interface IRecipes {
    recipes: {
        id?: number
        name: string
        servings: number
        cookTime: string
        instructions: string
    }[]
}

export type TRecipe = {
    id?: number
    name: string
    servings: number
    cookTime: string
    instructions: string
}
