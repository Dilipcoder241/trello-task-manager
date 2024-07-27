

export default function Priority({text}) {
    return (
        <div className={`status p-2 rounded-lg ${text=="urgent" && "bg-red-400"} ${text=="low" && "bg-green-400"} ${text=="medium" && "bg-orange-400"} w-fit text-white`}>
            {text}
        </div>
    )
}
