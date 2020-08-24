import { IJsonPlaceholderService } from "./ijson-placeholder-service";
import { User } from "../../models/user";
import { Post } from "../../models/post";

export class JsonPlaceholderFacade {
  constructor(private _service: IJsonPlaceholderService) {}

  async getUser(userId: number): Promise<User | null> {
    const user = await this._service.getUser(userId);
    if (!user) return null;

    const allPosts = await this._service.getAllPosts();
    const userPosts = allPosts.filter((post) => post.userId === user.id);
    return { ...user, posts: userPosts };
  }

  async getPost(postId: number): Promise<Post | null> {
    const post = await this._service.getPost(postId);
    if (!post) return null;

    const allUsers = await this._service.getAllUsers();
    const postUser = allUsers.find((user) => user.id === post.userId);
    return { ...post, user: postUser };
  }
}
