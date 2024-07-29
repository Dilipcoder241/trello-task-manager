import Link from "next/link";


export default function TaskButton({tab}:{tab:string}) {
  return (
    <Link href={`./createtodo/?tab=${tab}`} className="bg-[#2B2B2B] text-white flex items-center p-2 rounded-lg justify-between w-full">Add new <img src="./plus.png" alt="" className="w-7"/></Link>
  )
}
