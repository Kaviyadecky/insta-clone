import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <div className="suggestions__username">
            <div className="user__profile">
              <span className="avatar">
                <Avatar>{user.charAt(0).toUpperCase()}</Avatar>{" "}
              </span>
              <div className="user__info">
                <span className="user">
                  {user}
                  <span className="post__time">{`  • ${timestamp}`}</span>
                </span>
                <span className="post__relation">username</span>
              </div>
            </div>
          </div>
        </div>
        <MoreHorizIcon fontSize="large" />
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
}

export default Post;
