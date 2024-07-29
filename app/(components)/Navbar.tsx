import Link from "next/link";
import Button from "./Button";
import { useMyContext } from "../(context)/context";



export default function Navbar() {
  const { user } = useMyContext();
  
  return (
    <div className="w-[20%] h-screen bg-white px-2 py-7 space-y-3 flex flex-col justify-between">
        <div className="top">
        <div className="userInfo flex gap-2 items-center">
            <img src="./person.png" alt="" className="w-12 rounded-lg"/>
            <h1 className="text-2xl font-semibold">{user?user:"username"}</h1>
        </div>

        <div className="icons flex justify-between">
          <div className="left flex gap-4 py-2">
            <img src="./bell.png" alt="" className="w-7"/>
            <img src="./sun.png" alt="" className="w-7"/>
            <img src="./arrow.png" alt="" className="w-7"/>
          </div>
          <div>
          <Link href="./login" className="px-2 py-2 bg-[#F4F4F4] rounded-md text-slate-500">Logout</Link>
          </div>
        </div>

        <div className="menus">
         { [{title:"Home" , url:"./home.png"},{title:"Boards" , url:"./board.png"},{title:"Settings" , url:"./setting.png"} , {title:"Teams" , url:"./team.png"} , {title:"Analytics" , url:"./graph.png"}].map((item,i)=>(
          <div key={i} className="menu flex items-center gap-3 w-full rounded-md hover:bg-[#F4F4F4] py-2 px-2">
          <img src={item.url} alt="" className="w-7"/>
          <p className="text-slate-500">{item.title}</p>
          </div>
         ))}
        </div>

         <Button text="Create New Task" sm={false}/>
        </div>

         <button className="download flex bg-[#F3F3F3] rounded-md py-1 w-full">
          <img src="./download.png" alt="" className="w-11"/>
          <div>
            <h2>Download the app</h2>
            <p className="text-slate-400 text-sm">Get full experience</p>
          </div>
         </button>
    </div>
  )
}
