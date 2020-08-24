import axios from "axios";

import { User } from "../models/user";
import { Post } from "../models/post";

interface IJsonPlaceholderService {
  getUsers(): Promise<User[]>;
  getPosts(): Promise<Post[]>;
}

export class JsonPlaceholderService implements IJsonPlaceholderService {
  private _baseUrl: string = "https://jsonplaceholder.typicode.com/";
  private _endpoints = {
    users: `${this._baseUrl}/users`,
    posts: `${this._baseUrl}/posts`,
  };

  private _getEntity<T>(url: string): Promise<T[]> {
    return axios.get(url).then((response) => JSON.parse(response.data));
  }

  async getUsers(): Promise<User[]> {
    return this._getEntity<User>(this._endpoints.users);
  }

  async getPosts(): Promise<Post[]> {
    return this._getEntity<Post>(this._endpoints.posts);
  }
}
