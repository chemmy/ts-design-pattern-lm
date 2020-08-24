import React, { useState, FC } from "react";

import { JsonPlaceholderFacade } from "../services/json-placeholder/json-placeholder-facade";
import { JsonPlaceholderService } from "../services/json-placeholder/json-placeholder-service";
import { User } from "../models/user";
import Search from "./Search";

const facade = new JsonPlaceholderFacade(new JsonPlaceholderService());

const UserComponent: FC = () => {
  const [userData, setUserData] = useState<User | null>(null);

  const searchUser = async (userId: string) => {
    const user = await facade.getUser(Number(userId));
    console.log("searchuser", user);
    setUserData(user);
  };

  return (
    <div className="main-component user-component">
      <Search type="user" onSearch={(value) => searchUser(value)} />
      {userData ? (
        <div className="user-data">
          <div className="ui cards">
            <div className="card">
              <div className="content">
                <div className="header">{userData.name}</div>
                <div className="meta">{userData.username}</div>
                <div className="meta">{userData.email}</div>
                <div className="meta">{userData.website}</div>
              </div>
            </div>
          </div>
          <div className="ui divided items">
            {userData.posts.map((post, idx) => (
              <div className="item" key={idx}>
                <div className="content">
                  <div className="header">{post.title}</div>
                  <div className="description">{post.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>No user</div>
      )}
    </div>
  );
};

export default UserComponent;
