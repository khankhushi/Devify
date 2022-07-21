import React, { useState } from "react";

import "./RightSide.css";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import AddToPhotosRoundedIcon from '@mui/icons-material/AddToPhotosRounded';

import TrendCard from "../RS_TrendCard/TrendCard";
import ShareModal from "../RS_ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <HomeRoundedIcon style={{ fill: '#583194' }}/>
        <SettingsRoundedIcon style={{ fill: '#583194' }}/>
        <NotificationsRoundedIcon style={{ fill: '#583194' }}/>
        <ModeCommentRoundedIcon style={{ fill: '#583194' }}/>
      </div>

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        <AddToPhotosRoundedIcon />
          <p>Share your learnings</p>
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
  </div> 
  );
};

export default RightSide;