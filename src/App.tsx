import React from 'react'

import RecipeEdit from './components/recipe-edit/recipe-edit.component'
import RecipeList from './components/recipe-list/recipe-list.component'

import RecipesContextProvider from './contexts/recipes.context'

import './css/app.css'

const App: React.FC = (): JSX.Element => {
    return (
        <RecipesContextProvider>
            <RecipeList />
            <RecipeEdit />
        </RecipesContextProvider>
    )
}

export default App
