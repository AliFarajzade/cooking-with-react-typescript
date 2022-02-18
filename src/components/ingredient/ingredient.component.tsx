import React from 'react'

import { TIngredients } from '../../interfaces/recipes.interface'

const Ingredient: React.FC<TIngredients> = ({ name, amount }): JSX.Element => {
    return (
        <>
            <span>{name}</span>
            <span>{amount}</span>
        </>
    )
}

export default Ingredient
