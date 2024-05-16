
interface BlogCardProps {
    authorname: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorname,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <div className="p-4 border-b border-gray-700 pb-4 w-screen max-w-screen-md cursor-pointer bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-200">
            <div className="flex items-center">
                <Avatar name={authorname} />
                <div className="font-light pl-2 text-sm text-gray-300">{authorname}</div>
                <div className="pl-2 font-thin text-gray-500 text-sm">&#x2022;</div>
                <div className="pl-2 font-thin text-gray-500 text-sm">{publishedDate}</div>
            </div>
            <div className="text-xl font-semibold pt-2 text-white">{title}</div>
            <div className="text-md font-thin text-gray-400">{content.slice(0, 100) + "..."}</div>
            <div className="text-gray-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    );
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
            <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-200`}>
                {name[0]}
            </span>
        </div>
    );
}
