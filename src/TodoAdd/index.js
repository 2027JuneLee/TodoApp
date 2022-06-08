
import styled from "styled-components"
import React, { useState } from "react"

const Wrapper = styled.div`
    display: flex;
    
    `
const Input = styled.input`
    border: 1.5px solid black;
    background-color: #f4a460;
    height: 40px;
    width: 175px;
    // border-radius: 10px;
`
const Bttn = styled.button`
    background-color: #fff460;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    width: 70px;
    height: 45px;
    // border-radius: 10px
`


function TodoAdd({updateTodo}) {
    
    const [todos,setTodos] = useState({
        id: null,
        name: "",
        isDone: false,
    })

    const addTodo = (e) => {
        const { name, value} = e.target;
        setTodos({
        id: todos.length-1,
        text: value,
        isDone: false
        })
    }
    function change(){
        // alert("todo added!")
        updateTodo(todos)//Parameter === function
    }

    console.log(todos)
    
    // const {value} = e.target


    return(
        <Wrapper>
            <Input 
            type="text" 
            name="text"  
            value={todos.text}
            onChange={addTodo}>
            </Input><Bttn onClick={change}>+ Add Todo</Bttn>
        </Wrapper>
    )
}
export default TodoAdd
