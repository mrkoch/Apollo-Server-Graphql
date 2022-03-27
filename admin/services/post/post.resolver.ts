import { Resolver, Mutation, Arg, Query, Ctx, ID } from "type-graphql";
import search from "../../helpers/search";
import Post from "./post.type";
import PostInput from "./post.input_type";
@Resolver()
export default class PostResolver {
  @Query((returns) => [Post], { description: "Get All Posts" })
  async posts(
    @Ctx() context: any,
    @Arg("searchBy", { nullable: true }) searchBy?: string
  ): Promise<Post[] | undefined> {
    let posts = await context.prisma.post.findMany({
      orderBy: [
        {
          id: "desc",
        },
      ],
      // include: {
      //   author: true,
      // },
      //where: { id: 3 },
      //data: { published: true },
    });
    return await search(posts, ["title", "code"], searchBy);
  }

  @Mutation((returns) => Post)
  async upsertPost(
    @Ctx() context: any,
    @Arg("post") post: PostInput,
    @Arg("id", (type) => ID, { nullable: true }) id?: number
  ): Promise<Post | undefined> {
    console.log(post, "post");
    if (id) {
      const updatedPost = await context.prisma.post.update({
        where: {
          id: +id,
        },
        data: {
          ...post,
        },
      });
      return updatedPost;
    } else {
      const newPost = await context.prisma.post.create({
        data: {
          ...post,
        },
      });
      return newPost;
    }
  }
}
