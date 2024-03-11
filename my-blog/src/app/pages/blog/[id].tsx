import BlogItem from "@/app/components/blog/blogItem";
import { BlogMenu } from "@/app/components/blog/blogMenu";
import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();
  const { id } = router.query;

  if (Array.isArray(id)) {
    return <div>Erreur : plusieurs identifiants spécifiés</div>;
  }

  return (
    <div className="flex">
      <div className="w-1/4">
        <BlogMenu />
      </div>
      <div className="flex-1 p-5">
        <BlogItem id={id as string} />
      </div>
    </div>
  );
}
