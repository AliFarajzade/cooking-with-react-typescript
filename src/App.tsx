import React from 'react'

import RecipeList from './components/recipe-list/recipe-list.component'

import RecipesContextProvider from './contexts/recipes.context'

import './css/app.css'

const App: React.FC = (): JSX.Element => {
    return (
        <RecipesContextProvider>
            <RecipeList />
        </RecipesContextProvider>
    )
}

export default App
