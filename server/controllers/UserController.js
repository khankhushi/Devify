import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";


// Get a User
export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);
        if (user) {
          const { password, ...otherDetails } = user._doc;
    
          res.status(200).json(otherDetails);
         } else {
          res.status(404).json("No such User");
        }
      } catch (error) {
        res.status(500).json(error);
      }
    };

// Update a user
export const updateUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId, currentUserAdminStatus, password } = req.body;
    if(id==currentUserId || currentUserAdminStatus)
    { 
        try {

            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
              }

            const user = await UserModel.findByIdAndUpdate(id, req.body, {
                new: true,

              });
              res.status(200).json({user});
        } catch (error) {
            res.status(500).json(error);
        }
    }else {
    res
      .status(403)
      .json("Access Denied! You can update only your own Account.");
  }
};

// Delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id;
  
    const { currentUserId, currentUserAdminStatus } = req.body;
  
    if (currentUserId == id || currentUserAdminStatus) {
      try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("User Deleted. Sad to see you go :(");
      } catch (error) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("Access Denied!");
    }
  };

  // Follow a user
  export const followUser = async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
    console.log(id, _id)
    if (_id == id) {
      res.status(403).json("Action Forbidden");
    } else {
      try {
        const followUser = await UserModel.findById(id);
        const followingUser = await UserModel.findById(_id);
  
        if (!followUser.followers.includes(_id)) {
          await followUser.updateOne({ $push: { followers: _id } });
          await followingUser.updateOne({ $push: { following: id } });
          res.status(200).json("User followed!");
        } else {
          res.status(403).json("you are already following this id");
        }
      } catch (error) {
        console.log(error)
        res.status(500).json(error);
      }
    }
  };

  // Unfollow a user
  export const unfollowUser = async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
  
    if(_id === id)
    {
      res.status(403).json("Action Forbidden")
    }
    else{
      try {
        const unFollowUser = await UserModel.findById(id)
        const unFollowingUser = await UserModel.findById(_id)
  
  
        if (unFollowUser.followers.includes(_id))
        {
          await unFollowUser.updateOne({$pull : {followers: _id}})
          await unFollowingUser.updateOne({$pull : {following: id}})
          res.status(200).json("Unfollowed Successfully!")
        }
        else{
          res.status(403).json("You are not following this User")
        }
      } catch (error) {
        res.status(500).json(error)
      }
    }
  };
  