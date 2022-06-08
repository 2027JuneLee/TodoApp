import styled from "styled-components"
import React, { useState } from "react"

const Wrapper = styled.div`
    display: flex;
    font-family: 'Square Peg', cursive;
    letter-spacing: 5px;
`

function TodoLeft({todos}) {
    
    // todos => []
    return(
        <Wrapper>
            <h1>Number of todos left: {todos.length}</h1>
        </Wrapper>
    )
}
export default TodoLeft