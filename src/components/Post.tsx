import React, { useState, FC } from "react";

import { JsonPlaceholderFacade } from "../services/json-placeholder/json-placeholder-facade";
import { JsonPlaceholderService } from "../services/json-placeholder/json-placeholder-service";
import Search from "./Search";
import { Post } from "../models/post";

const facade = new JsonPlaceholderFacade(new JsonPlaceholderService());

const PostComponent: FC = () => {
  const [postData, setPostData] = useState<Post | null>(null);

  const searchPost = async (postId: string) => {
    const post = await facade.getPost(Number(postId));
    setPostData(post);
  };

  return (
    <div className="main-component post-component">
      <Search type="post" onSearch={(value) => searchPost(value)} />
      {postData ? (
        <div className="post-data">
          <div className="ui divided items">
            <div className="item">
              <div className="content">
                <div className="header">{postData.title}</div>
                <div className="description">{postData.body}</div>
                <div className="meta">
                  <span>{postData.user?.name}</span>
                  <span>{postData.user?.email}</span>
                  <span>{postData.user?.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No post</div>
      )}
    </div>
  );
};

export default PostComponent;
