import {TaskType} from "../../types/task/task";

interface TodoItemProps {
    task: TaskType;
}

export default function TodoItem(props: TodoItemProps): JSX.Element {
    const {task} = props;

    return(
        <li>
            <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
        </li>
    );
}
