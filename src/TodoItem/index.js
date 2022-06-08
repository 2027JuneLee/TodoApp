import styled from "styled-components";
import React, { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    font-size: 12px;
    // font-family: 
`
const Input = styled.input`
    height: 60px;
    width: 20px;
`
const Rick = styled.button`
    background-image: url('https://t3.ftcdn.net/jpg/02/11/54/46/360_F_211544695_L51qK9f0tPE9HfGNJeYJK3uPsl0y5oJH.jpg');
    height: 50px;
    background-size: cover;
    width: 50px;
    border-radius: 5px;
`
const Check = styled.button`
    background-size: cover;
    height: 40px;
    width: 40px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSU
    hEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWNz+8yQIFhAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAA
    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC')
`
function TodoItem({todo,deleteTodo}) {
    

    function magic(){
        deleteTodo()
    }
    return(
        <Wrapper>
            <Check isDone={todo.isDone} />
            <h1>{todo.text}</h1>
            <Rick onClick={magic}></Rick>
        </Wrapper>
    )
}
export default TodoItem