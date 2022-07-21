import React from 'react'

import Posts from '../PO_Posts/Posts'
import PostShare from '../PO_PostShare/PostShare'

import './PostSide.css'

const PostSide = () => {
  return (
   <div className="PostSide">
       <PostShare/>
        <Posts/>
   </div>
  )
}

export default PostSide