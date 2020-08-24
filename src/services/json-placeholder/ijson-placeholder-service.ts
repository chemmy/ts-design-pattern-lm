import { User } from "../../models/user";
import { Post } from "../../models/post";

export interface IJsonPlaceholderService {
  getAllUsers(): Promise<User[]>;
  getAllPosts(): Promise<Post[]>;
  getUser(id: number): Promise<User>;
  getPost(id: number): Promise<Post>;
}
