import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <AppBar />
            <div className="flex justify-center pt-8">
                <div className="max-w-xl w-full">
                    {loading ? (
                        <div className="space-y-4">
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>
                    ) : (
                        blogs.map(blog => (
                            <BlogCard
                                key={blog.id}
                                authorname={  "Anonymous"}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={ "Unknown date"}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

const SkeletonCard = () => (
    <div className="animate-pulse p-4 border border-gray-700 rounded-lg bg-gray-800">
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
    </div>
);
