import {TaskType} from "../../types/task/task";
import TodoItem from "../todo-item/todo-item";

interface TodoListProps {
    title?: string;
    tasks?: TaskType[];
}

export default function TodoList(props: TodoListProps): JSX.Element {
    const {title = '', tasks = []} = props;

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasks.length > 0 ?
                <ul>
                    {tasks.map((task) => <TodoItem key={task.id} task={task}/>)}
                </ul>
                :
                <span>Your tasks list is empty </span>
            }

            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}
