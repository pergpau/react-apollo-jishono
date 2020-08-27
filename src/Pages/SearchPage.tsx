import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import ResultBox from "../Components/ResultBox"
import SearchBar from "../Components/SearchBar"
import gql from "graphql-tag";
//import { DataContext } from "../Contexts/DataContext";

const GET_OPPSLAG = gql`
    query searchOppslagByQuery($sokeord: String!) {
        alleOppslag(sokeord: $sokeord) {
            id
            oppslag
                definisjoner {
                    id
                    prioritet
                    definisjon
                    }
        }
    }
`
const ResultList = (props: any) => {

    const { results, called } = props

    if (called) {
        if (results.length === 0 ) {
            return <div>Ingen treff</div>
        } else {
            return (
                <>
                    {results.map((result: any) => {
                        return (
                            <ResultBox key={result.oppslag + result.id} singleResult={result}></ResultBox>)
                    })}
                </>
            )
        }
    } else {
        return null
    }
}

const SearchPage = () => {

    const [query, setQuery] = useState<string>('')
    const [results, setResults] = useState<any[]>([])

    const [runQuery, { called, loading, data }] = useLazyQuery(GET_OPPSLAG, {
        variables: {
            sokeord: query,
        },
    });

    useEffect(() => {
        if (data) {
            setResults(data.alleOppslag)
        }
    }, [data])

    const handleSubmit = (query: string) => {
        if (query !== '') {
            setQuery(query)
            runQuery()
        }
    }

    return (
        <>
            <SearchBar handleSubmit={handleSubmit} />
            {(called && loading) ?
                (<p>Søker ...</p>) : 
                (<ResultList results={results} called={called} />)
            }
        </>
    )
}

export default SearchPage