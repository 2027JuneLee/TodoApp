import styled from "styled-components"
import React, { useState } from "react";
import TodoItem from "../TodoItem"
import { useHistory } from "react-router-dom"



const Wrapper = styled.div` 
    display: flex;
    flex-direction: column;
    `

function TodoList({todos, deleteTodo}) {
    return(
            <Wrapper>
                {todos.map((todo) => (
                    <TodoItem todo={todo} deleteTodo={deleteTodo} ></TodoItem>
                ))}
                <h5></h5>
            </Wrapper>
    )
}
export default TodoList