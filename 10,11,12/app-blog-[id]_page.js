// app/page.js
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import blogs from "@/data/data-blogs";

export default function BlogDetails() {
    const params = useParams();
    const blog = blogs.find((item) => item.id == params.id);
    
    if (blog == undefined) {
        return <h2 className="container">Blog not found</h2>;
}
return (
    <main className="container">
        <h1>{blog.title}</h1>
        <p className="author">By {blog.author}</p>
        <p>{blog.content}</p>
        <Link href="/">← Back to all blogs</Link>
    </main>
    );
}