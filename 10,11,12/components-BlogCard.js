import Link from "next/link";

export default function BlogCard(props) {
    return (
        <div className="card">
            <Link href={"/blog/" + props.id}>
                <h2>{props.title}</h2>
            </Link>
            <p className="author">By {props.author}</p>
            <p>{props.description}</p>
        </div>
        );
    }