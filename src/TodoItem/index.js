import styled, {css} from "styled-components";
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
    height: 20px;
    width: 20px;
    border-radius: 150px:
    border: 3px solid #4A7A4A;
    ${(props) =>
    props.isDone &&
    css`
        background-color: #4A7A4A;
        border: 3px solid #4A7A4A;
    `
    }
`
function TodoItem({todo,deleteTodo}) {
    

    function magic(){
        deleteTodo(todo.id)
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