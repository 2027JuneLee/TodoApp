import styled from "styled-components"
import React, { useState } from "react"

const RR = styled.div`
    color: #CCCC99;
`
const Wrapper = styled.div`
    display: flex;
    `
const Dates = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: bold;
`
const DateBold = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: normal;
    display: block;
`

function TodoDate() {
    const today = new Date();
    const dayName = today.toLocaleString("en-US", {weekday: "long"})

    return(
        <div>
            <Wrapper>
                <Dates>{today.getFullYear()}</Dates>
                <p>/</p>
                <Dates>{today.getMonth() + 1}</Dates>
                <p>/</p>
                <Dates>{today.getDate()}</Dates>
                <p>/</p>
            </Wrapper>
            <DateBold>{dayName}</DateBold>
        </div>
    )
}
export default TodoDate