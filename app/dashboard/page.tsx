import Button from "../(components)/Button";
import Navbar from "../(components)/Navbar";
import TodoTab from "../(components)/TodoTab";

export default function page() {
    
    return (
        <div className="relative bg-[#F7F7F7] flex">
            <Navbar />

            <div className="content w-[80%] px-7 py-4 space-y-4">
                <div className="greet w-full flex justify-between">
                    <h1 className="text-3xl font-bold">Good morning, User!</h1>
                    <button className="flex items-center gap-1 cursor-pointer">Help & Feedback <img src="./question.png" alt="" className="w-5"/></button>
                </div>

                <div className="intro flex gap-2">
                    {[{title:"Introducing tags" , desc:"Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient." , url:"./h1.png"}, {title:"Share Notes Instantly" , desc:"Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options." , url:"./h2.png"} , {title:"Access Anywhere" , desc:"Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer." , url:"./h3.png"}].map((item,i)=>(
                    <div key={i} className="bg-white flex gap-2 px-2 py-4 rounded-lg">
                        <img src={item.url} alt="" className="w-[25%]"/>
                        <div>
                            <h1 className="font-semibold">{item.title}</h1>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                    </div>
                    ))}
                    
                </div>

                <div className="options flex justify-between">
                    <div className="left flex bg-white items-center px-2 rounded-md">
                        <input type="text" placeholder="Search" className="p-2"/>
                        <img src="./search.png" alt="" className="w-6 h-6"/>
                    </div>
                    <div className="right flex gap-10">
                        {[{title:"Calender View" , url:"./calender.png"} , {title:"Automation" , url:"./star.png"} , {title:"Filter" , url:"./filter.png"} , {title:"Share" , url:"./share.png"}].map((item, i)=>(
                            <div key={i} className="flex items-center gap-3">
                            <p className="text-slate-500">{item.title}</p>
                            <img src={item.url} alt="" className="w-6"/>
                            </div>
                        ))}
                        <Button text="Create new" sm={true}/>
                    </div>
                </div>
            

            <div className="tasks bg-white p-2 rounded-md flex gap-4">
                <TodoTab status="Todo"/>
                <TodoTab status="In Progress"/>
                <TodoTab status="Under Review"/>
                <TodoTab status="Finished"/>  
            </div>

            </div>
        </div>
    )
}
