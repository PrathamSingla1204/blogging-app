import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = ()=>{

    const {loading,blogs} = useBlogs();

    if(loading){  //add skeletons here
        return <div>
            loading...   
        </div>
    }

    return <div>
        <AppBar/>
        <div className="flex justify-center">
            <div className="max-w-xl">
                {blogs.map(blog => <BlogCard
            authorname={"Anonymous"}
            title = {blog.title}
            content = {blog.content}
            publishedDate={"23 march 2024"}
            />)}
            
            </div>
        </div>
        

    </div>
}