import React, { useState } from "react";

import "./InfoCard.css";

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';

import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <EditRoundedIcon
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <CodeRoundedIcon />
          <b>Tech Stack</b>
        </span>
        <span>Python, Django, Flask</span>
      </div>

      <div className="info">
        <span>
        <FavoriteRoundedIcon />
          <b>interested in learning</b>
        </span>
        <span>Machine Learning</span>
      </div>

      <div className="info">
        <span>
        <WorkRoundedIcon />
          <b>Works at</b>
        </span>
        <span>ABX Inc.</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;