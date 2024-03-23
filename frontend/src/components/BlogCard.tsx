
interface BlogCardProps {
    authorname:string;
    title:string;
    content:string;
    publishedDate:string;
}


export const BlogCard = ({
    authorname,  
    title,
    content,
    publishedDate
}:BlogCardProps) =>{
    return (
   <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
    <div className="flex items-center">
        <Avatar name={authorname} />
        <div className="font-extralight pl-2 text-sm">{authorname}</div>
        <div className="pl-2 font-thin text-slate-500 text-sm">&#x2022;</div>
        <div className="pl-2 font-thin text-slate-500 text-sm">{publishedDate}</div>
    </div>
    <div className="text-xl font-semibold pt-2">{title}</div>
    <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
    <div className="text-slate-500 text-sm font-thin pt-4">
        {`${Math.ceil(content.length / 100)} minute(s) read`}
    </div>
</div>
)


}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}