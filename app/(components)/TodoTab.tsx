import TaskButton from "./TaskButton";
import TodoContainer from "./TodoContainer";



export default function TodoTab({status , todos}) {
  return (
    <div className="Todo space-y-4">
                    <div className="header flex justify-between">
                        <h1>{status}</h1>
                        <img src="./menu.png" alt="" className="w-7"/>
                    </div>

                    {todos.map((todo)=>{
                      return <TodoContainer key={todo._id} todo={todo}/>
                    })}
                    

                    <TaskButton tab={status}/>

                </div>
  )
}
