//app/blog/[id]/page.js

import blogs from "@/data/data-blogs";
import BlogCard from "@/components/components-BlogCard";
export default function Home() {
return (
    <main className="container">
        <h1>My Blog</h1>
        {blogs.map((blog) => (
            <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                author={blog.author}
                description={blog.description}
            />
        ))}
    </main>
    );
}