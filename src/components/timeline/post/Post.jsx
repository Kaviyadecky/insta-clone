import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import "./Post.css";
import {Modal} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Post({ user, postImage, likes, timestamp }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [visible,setVisible] = useState(false)
  const handleClick = (event) => {
    console.log(visible)
    setVisible(true)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setVisible(false);

    setAnchorEl(null);
  };

  return ( <>

  
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
        <MoreHorizIcon fontSize="large" onClick={handleClick} />
        
        

        
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" fontSize="inherit" />
            <ChatBubbleOutlineIcon className="postIcon" fontSize="inherit" />
            <TelegramIcon className="postIcon" fontSize="inherit" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" fontSize="inherit" />
          </div>
        </div>
        <span style={{fontSize:"14px"}}>
        Liked by {likes} people.
        </span>
      </div>
    </div>
    <Modal  open={visible} onClose={handleClose} >
          <Box xs= {style}>
          <Menu 
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem  onClick={handleClose}>Report</MenuItem>
          <MenuItem  onClick={handleClose}>Unfollow</MenuItem>
          <MenuItem  onClick={handleClose}>Add to favorites</MenuItem>
          <MenuItem  onClick={handleClose}>Go to post</MenuItem>
          <MenuItem  onClick={handleClose}>Share to</MenuItem>
          <MenuItem  onClick={handleClose}>Copy link</MenuItem>
          <MenuItem  onClick={handleClose}>Embed</MenuItem>
          <MenuItem  onClick={handleClose}>About this account</MenuItem>
          <MenuItem  onClick={handleClose}>Cancel</MenuItem>
        </Menu>
        </Box>
        </Modal>
    </>
  );
}

export default Post;