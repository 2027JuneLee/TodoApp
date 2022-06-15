import styled from "styled-components"
import React, { useState } from "react";
import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft"
import TodoAdd from "../TodoAdd"

import TodoList from "../TodoList"
import { useHistory } from "react-router-dom"



const Wrapper = styled.div`
    background-image: url(https://static.scientificamerican.com/sciam/cache/file/0B4ED7B8-6C6A-4031-BEE1253D115FD0CC_source.jpg?w=590&h=800&9717A2E2-EE9D-4CD5-A52BB4E3ED51CBF4);
    height: 100%
    `
const SonOfAWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%
`
const Blob = styled.div`
    text-overflow: clip;
    white-space: nowrap;
    overflow: hidden; 
    position:relative;
    background-color: #CCCC99;
    height: 100%;
    width: 50%;
    border: 3px solid black;
    border-radius: 15px;
`
const SonOfASonOfAWrapper = styled.div`
    height: 45%;
    width: 100%;
`
function Todo(props) {

    
    const [todos,setTodos] = useState([])

    // const [age,setage] = useState(0)
    // const [student,setName] = useState({  
    // first_name: "default",
    // last_name: "default"})

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }
    const removeTodo = (id) => {
        console.log(id);
        const newTodos = todos.filter((todo) => todo.id != id);
        setTodos(newTodos);
        // setTodos([])
    }
    const changeIsDone = (id) => {
        const currentTodo = todos[id-1];
        console.log(currentTodo)
        if(currentTodo.isDone == false){
            currentTodo.isDone = true
        }
        else{
            currentTodo.isDone = false
        }
        setTodos([...todos]);
    }
    return(
            <Wrapper>
                <SonOfAWrapper>
                    <Blob>
                        <TodoDate></TodoDate>
                        <TodoLeft todos={todos} id="pray"></TodoLeft>
                        <hr size="3" width="90%" color="black"></hr>
                        <br></br>
                        <TodoAdd todos={todos} updateTodo={addTodo}></TodoAdd>
                        <br></br>
                        <TodoList todos={todos} deleteTodo={removeTodo} bye={changeIsDone}></TodoList>
                        <br></br>
                        <hr size="2" width="90%" color="black"></hr>
                     
                    </Blob>
                </SonOfAWrapper>
            </Wrapper>
    )
}
export default Todo