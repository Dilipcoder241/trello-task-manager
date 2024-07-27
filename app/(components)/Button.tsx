import Link from "next/link";


export default function Button({text , sm}) {
  return (
    <Link href="/createtodo" className={`bg-[#4a39b1] text-white ${sm && "px-2 py-1"} px-4 py-3 rounded-lg flex items-center gap-4`}>{text} <img src="./add.png" alt="" className="w-7"/></Link>
  )
}
