import React from "react";
import styled from 'styled-components'

const Card = styled.div`
    position: relative;
    text-align: start;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin-bottom: 10px;
  `

const CardHeader = styled.div`
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  `
const CardBody = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`

const ResultBox = (props: any) => {
    const { singleResult } = props
    const { oppslag, definisjoner } = singleResult
    return (
        <div>
            <Card>
                <CardHeader>
                    {oppslag}
                </CardHeader>
                <CardBody>
                    {definisjoner.map((def: any) => {
                        return (
                            <div key={def.definisjon + def.def_id}>{def.prioritet}. {def.definisjon}</div>
                        )
                    })}
                </CardBody>
            </Card>
        </div>
    )
}

export default ResultBox