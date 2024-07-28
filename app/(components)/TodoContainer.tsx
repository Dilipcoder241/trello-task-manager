import Status from "./Priority";


export default function TodoContainer() {
  return (
    <div className="space-y-4">

                    <div className="container bg-[#F9F9F9] p-2 rounded-md space-y-4 border-2 border-[#ECECEC]">
                    <div className="content ">
                        <h1>Title</h1>
                        <p className="text-slate-500">descLorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, obcaecati?</p>
                    </div>

                    <Status text="urgent"/>

                    <div className="deadline flex gap-3 items-center">
                        <img src="./clock.png" alt="" className="w-7"/>
                        <h1>2024-08-15</h1>
                    </div>

                    <h1 className="timeofCreation text-slate-500">1hr / day ago</h1>
                    </div>

                    </div>
  )
}
