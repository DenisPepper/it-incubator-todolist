import './App.css';
import TodoList from "./components/todo-list/todo-list";

export default function App() {
    return (
        <div className="App">
            <TodoList title={'What to learn'}/>
            <TodoList title={'Songs'}/>
            <TodoList title={'Books'}/>
        </div>
    );
}
