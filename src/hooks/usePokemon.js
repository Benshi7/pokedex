import { useState } from 'react'

const usePokemon = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const searchFilter = (value) => {
        if (searchTerm === '') {
            return value
        } else {
            return value.name.toLowerCase().includes(searchTerm.toLowerCase())
        }
    }

    return [searchTerm,
        setSearchTerm,
        handleSearch,
        searchFilter]

}

export default usePokemon