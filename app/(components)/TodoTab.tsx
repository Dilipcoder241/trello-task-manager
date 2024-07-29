import TaskButton from "./TaskButton";
import TodoContainer from "./TodoContainer";
import { Draggable, Droppable } from 'react-beautiful-dnd';

interface Todo {
  _id: string;
  title: string;
  status: 'todo' | 'inprogress' | 'underreview' | 'finished';
  description?: string;
  priority?: string;
  deadline?: string;
}


interface TodoTabProps {
  status: string;
  todos: Todo[];
}

const TodoTab: React.FC<TodoTabProps> = ({ status, todos }) => {
  return (
    <div className="Todo space-y-4">
      <div className="header flex justify-between">
        <h1>{status}</h1>
        <img src="./menu.png" alt="" className="w-7" />
      </div>

      {todos.map((todo , index)=> ( 
      <Droppable key={todo._id} droppableId={todo._id}>
        {(provided)=> (
          <div key={todo._id} {...provided.droppableProps} ref={provided.innerRef}>
            <Draggable key={todo._id} draggableId={todo._id} index={index}>
              {(provided)=>(
                <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                <TodoContainer  todo={todo} />
                </div>
                )}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      ))}

      <TaskButton tab={status} />

    </div>
  )
}

export default TodoTab;
