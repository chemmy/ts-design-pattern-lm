import axios from "axios";

import { User } from "../../models/user";
import { Post } from "../../models/post";
import { IJsonPlaceholderService } from "./ijson-placeholder-service";

export class JsonPlaceholderService implements IJsonPlaceholderService {
  private _baseUrl: string = "https://jsonplaceholder.typicode.com/";

  private _getEntity<T>(url: string): Promise<T> {
    return axios
      .get(`${this._baseUrl}${url}`)
      .then((response) => response.data)
      .catch(() => null);
  }

  async getAllUsers(): Promise<User[]> {
    return this._getEntity<User[]>("users");
  }

  async getAllPosts(): Promise<Post[]> {
    return this._getEntity<Post[]>("posts");
  }

  async getUser(id: number): Promise<User> {
    return this._getEntity<User>(`users/${id}`);
  }

  async getPost(id: number): Promise<Post> {
    return this._getEntity<Post>(`posts/${id}`);
  }
}
