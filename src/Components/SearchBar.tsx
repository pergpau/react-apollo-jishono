import React, {useRef} from "react";
import styled from 'styled-components'

const SearchBarRow = styled.div`
    margin: 20px
`

const SearchBar = (props: any) => {
    const { handleSubmit } = props
    let inputRef = useRef<HTMLInputElement>(null)
    
    function handleClick() {
        if (inputRef.current !== null) {
            handleSubmit(inputRef.current.value)
          }
    }

    function handleKeyDown(e: any) {
        if (e.key === 'Enter' && inputRef.current !== null) {
            handleSubmit(inputRef.current.value)
          }
    }

    return (
        <SearchBarRow>
            <input
                name="searchInput"
                type="text"
                ref={inputRef}
                onKeyDown={handleKeyDown}
            />
            <input
                name="searchButton"
                type="button"
                value="Søk"
                onClick={handleClick}                
            />
        </SearchBarRow>
    )
}

export default SearchBar