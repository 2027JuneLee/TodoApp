import { BrowserRouter as Router, Route } from "react-router-dom"
import Todo from './MainPage'
import TodoDate from './TodoDate'
import TodoLeft from './TodoLeft'
import TodoAdd from './TodoAdd'
import TodoItem from './TodoItem'
import TodoList from './TodoList'

function App() {
  return(
  <div>
      <Router>
        <Route exact path="/" component={Todo}/>
      </Router>
  </div>
  );
}

export default App