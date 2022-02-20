import React, { useState } from 'react'

import { useRecipeData } from '../../contexts/recipes.context'

const SearchBox = () => {
    const [searchedTerm, setSearchedTerm] = useState<string>('')

    const { handleSearchRecipe } = useRecipeData()

    const handleChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedTerm(e.target.value)
        handleSearchRecipe(searchedTerm)
    }

    return (
        <input
            value={searchedTerm}
            onChange={handleChangeSearchTerm}
            name="search"
            type="search"
            className="search-box"
            placeholder="Search For Recipe..."
        />
    )
}

export default SearchBox
