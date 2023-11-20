    import prisma from "@/app/lib/prisma";
    import { NextResponse } from "next/server";


    export async function POST(request: Request){
        try {
            const body = await request.json();
            const { title, content } = body;
            //check if title and content submitted
            if (!title || !content) {
                return new Response(JSON.stringify({ error: "Title and content are required" }), {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }
    
            const postCreation = await prisma.post.create({
                data: {
                    title,
                    content,
                    createdBy: "eray", 
                }
            });
            //return the post creation with proper status 
            return NextResponse.json(postCreation, { status: 201 });
        } catch (error) {
            console.error("Failed to create post:", error);
            return new Response(JSON.stringify({ error: "Internal Server Error" }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    }