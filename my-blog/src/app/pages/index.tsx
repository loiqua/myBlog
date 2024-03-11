import { useRouter } from "next/router";
import { BlogMenu } from "../components/blog/blogMenu";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex">
      <BlogMenu />
      <div className="flex-1 p-5">
        <h1 className="text-2xl font-bold mb-5">Bienvenue sur mon blog</h1>
        <p className="text-lg">Cliquez sur un article pour le lire.</p>
      </div>
    </div>
  );
}
