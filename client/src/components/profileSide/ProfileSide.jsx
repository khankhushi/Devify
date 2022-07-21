import React from 'react'

import FollowersCard from '../PS_FollowersCard/FollowersCard'
import LogoSearch from '../PS_LogoSearch/LogoSearch'
import ProfileCard from '../PS_ProfileCard/ProfileCard'

import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide