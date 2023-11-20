"use server"
import prisma from "../lib/prisma"

type getSpecificPostProps = {
    params: {id: string};
}

export default async function getSpecificPost(postId: string){
    const post = await prisma.post.findUnique({
        where: {
            id: postId
        }
    })
    return post
}