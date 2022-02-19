import React from 'react'

import { TIngredients } from '../../interfaces/recipes.interface'

interface IProps {
    ingredientsObj: TIngredients
}

const Ingredient: React.FC<IProps> = ({
    ingredientsObj: { name, amount },
}): JSX.Element => {
    return (
        <>
            <span>{name}</span>
            <span>{amount}</span>
        </>
    )
}

export default Ingredient
