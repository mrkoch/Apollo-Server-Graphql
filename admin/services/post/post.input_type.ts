import { Field, InputType } from "type-graphql";
import Post from "./post.type";

@InputType({ description: "New coupon data" })
export default class PostInput implements Partial<Post> {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  slug: string;

  @Field()
  imageUrl: string;

  @Field({ defaultValue: 1 })
  status: number;

  @Field()
  created_at: number;

  @Field()
  updated_at: number;
}
