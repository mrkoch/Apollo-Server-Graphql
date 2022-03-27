import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class Post {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
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
