import Status from "./Priority";
import { formatDistanceToNow } from 'date-fns';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import axios from "../(utils)/axios"
import { useMyContext } from "../(context)/context";
import Link from "next/link";

interface Todo {
  _id: string;
  title: string;
  status: 'todo' | 'inprogress' | 'underreview' | 'finished';
  description?: string;
  priority?: string;
  deadline?: string;
  createdAt?: string;
}

interface TodoContainerProps {
  todo: Todo;
}

const TodoContainer: React.FC<TodoContainerProps> = ({ todo } ) => {
  const { setGlobTodos } = useMyContext();


  let distance:string|undefined;
  if (todo.createdAt) {
    const date = new Date(todo?.createdAt);
    distance = formatDistanceToNow(date, { addSuffix: true });
  }

  const handleDelete = async (id: string) => {
    try {
      const { data } = await axios.post(`/todo/delete/${id}`);
      if (data) {
        setGlobTodos(data);
        toast.success("ToDo Deleted");
      }
      else {
        toast.error("ToDo not deleted sorry");
      }
    } catch (error) {
      toast.error((error as any)?.response?.data?.msg);
    }
  }

  return (
    <div className="space-y-4">
      <div className="container bg-[#F9F9F9] p-2 rounded-md space-y-4 border-2 border-[#ECECEC] relative group overflow-hidden">
        <div className="content ">
          <h1>{todo.title}</h1>
          <p className="text-slate-500">{todo.description}</p>
        </div>

        {todo.priority && <Status text={todo.priority} />}

        {todo.deadline && <div className="deadline flex gap-3 items-center">
          <img src="./clock.png" alt="" className="w-7" />
          <h1>{todo?.deadline?.split('T')[0]}</h1>
        </div>}

        <h1 className="timeofCreation text-slate-500">{distance}</h1>
        <div className="btns w-full flex absolute duration-500 translate-y-0 left-0 group-hover:-translate-y-[120%] rounded-md">
          <Link href={`/edittodo/${todo._id}`} className="bg-green-600 w-1/2 py-2 text-white text-center"><FontAwesomeIcon icon={faPenToSquare} /></Link>
          <button className="bg-red-600 w-1/2 py-2 text-white" onClick={() => { handleDelete(todo._id) }}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
      </div>


    </div>
  )
}

export default TodoContainer;