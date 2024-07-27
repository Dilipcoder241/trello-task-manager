import Link from "next/link";


export default function page() {
  return (
    <div className="w-full h-screen p-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <Link href="/dashboard"><img src="./cross.png" alt="" className="w-7" /></Link>
          <img src="./minmax.png" alt="" className="w-7" />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-[#F4F4F4] p-3 rounded-md">
            <p>share</p>
            <img src="./share.png" alt="" className="w-6" />
          </div>
          <div className="flex items-center gap-3 bg-[#F4F4F4] p-3 rounded-md">
            <p>Favorite</p>
            <img src="./favorite.png" alt="" className="w-6" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <input type="text" placeholder="Title" className="text-7xl outline-none" />

        <div className="flex gap-36">
          <div>
            <div className="mt-10">
                <div className="flex gap-5 items-center">
                  <img src="./status.png" alt="" className="w-7" />
                  <p className="text-xl">Status</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex gap-5 items-center">
                  <img src="./priority.png" alt="" className="w-7" />
                  <p className="text-xl">Priority</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex gap-5 items-center">
                  <img src="./calender.png" alt="" className="w-7" />
                  <p className="text-xl">Deadline</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex gap-5 items-center">
                  <img src="./pencil.png" alt="" className="w-7" />
                  <p className="text-xl">Description</p>
                </div>
            </div>
          </div>

          <div className="inputs">
          <div className="mt-10">
                <select name="status" className="outline-none text-xl">
                  <option value="NotSelected">Not Selected</option>
                  <option value="todo">To Do</option>
                  <option value="inprogress">In Progress</option>
                  <option value="underreview">Under Review</option>
                  <option value="finished">Finished</option>
                </select>
            </div>
            <div className="mt-10">
                <select name="status" className="outline-none text-xl">
                  <option value="NotSelected">Not Selected</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="urgent">Urgent</option>
                </select>
            </div>
            <div className="mt-10"> 
                <input type="date" className="text-xl" />
            </div>
            <div className="mt-10">
                <textarea className="outline-none border-2 rounded-md p-2" rows={5} cols={30} placeholder="Description"></textarea>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
