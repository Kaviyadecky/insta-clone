import React, { useState } from "react";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import Post from "./post/Post";
import postDatas from "../../constants/posts";
function Timeline() {
  const [posts, setPosts] = useState(postDatas);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
