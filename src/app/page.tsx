import Image from "next/image";
import prisma from "./lib/prisma";
import { getPosts } from "./actions/getPosts";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="">
      <nav className="bg-red-400 h-24 w-full flex justify-between px-16 py-4 items-center text-xl">
        <div>Eray's Blog</div>
        <div>
          <div className="flex gap-4">
            <Link href={"/pages/add-post"}>Create a Post</Link>
            <p> |</p>
            <p>View Your Profile</p>
          </div>
        </div>
      </nav>
      <div className="m-8">
        <div>All of the Posts</div>
        <div className=" ">
          {posts.map((post) => (
            <>
              <div className="bg-gray-400 w-full h-20 my-8">{post.content}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
