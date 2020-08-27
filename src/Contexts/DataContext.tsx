import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_OPPSLAG = gql`
    query searchOppslagByQuery($sokerord: string) {
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

type ContextProps = {
  searchOppslag: any;
};

export const DataContext = React.createContext<ContextProps>({
  searchOppslag: () => { },
});
DataContext.displayName = "DataContext";

export const DataContextProvider = (props: any) => {

  const searchOppslag = (sokeord: string) => {
    const { loading, error, data } = useQuery(GET_OPPSLAG, {
      variables: {
        sokeord: sokeord,
      },
    });
    return [loading, error, data];
  }

  const initialContext = {
    searchOppslag: searchOppslag
  };

  return (
    <DataContext.Provider value={initialContext}>
      {props.children}
    </DataContext.Provider>
  )

}