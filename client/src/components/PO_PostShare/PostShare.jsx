import React, { useState, useRef } from "react";

import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";

//Icons
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What are you learning currently?" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <AddPhotoAlternateRoundedIcon />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <DataObjectRoundedIcon />
            Code Snippet
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <InsertLinkRoundedIcon />
            Links
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <TodayRoundedIcon />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <ClearRoundedIcon onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
  );
};

export default PostShare;