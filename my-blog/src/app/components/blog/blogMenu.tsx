import { Blog } from "@/app/utils/contans";
import Link from "next/link";

export function BlogMenu() {
  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#CCCCCC",
        overflowY: "auto",
        height: "calc(100vh - 100px)",
      }}
    >
      {Blog.map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <div style={{ padding: "10px", cursor: "pointer" }}>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontWeight: "bold" }}>ID</span>: {blog.id}
            </p>
            <p style={{ textAlign: "center" }}>{blog.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
