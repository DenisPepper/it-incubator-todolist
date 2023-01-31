import './App.css';
import TodoList from "./components/todo-list/todo-list";
import {tasks1, tasks2} from "./mock-tasks/mock-tasks";

export default function App() {
    return (
        <div className="App">
            <TodoList key={'tasks1'} title={'What to learn'} tasks={tasks1}/>
            <TodoList key={'tasks2'} title={'Songs'} tasks={tasks2}/>
        </div>
    );
}
