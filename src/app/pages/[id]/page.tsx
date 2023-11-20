import getSpecificPost from "@/app/actions/getSpecificPost";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const post = await getSpecificPost(params.id);
  return <div>{post?.title}</div>;
};

export default page;
