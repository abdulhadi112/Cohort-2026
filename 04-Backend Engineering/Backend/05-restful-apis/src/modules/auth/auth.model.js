// This is creating a schema & validating the data before it is inserted in the DB
import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 8
  },
  role: {
    type: String,
    enum: ["admin", "customer", "seller"], // usually these values are taken from a utils/constant.js 
    default: "customer", // This values is also taken from a utils/constant.js 
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verficationToken: {
    type: String,
    select: false // Jab ek new User create hoga & saara data return karega toh we dont want ki verificationToken return ho. By default yeh nhi hota hai 
  },
  refreshToken: {
    type: String,
    select: false
  },
  resetPasswordToken: {
    type: String,
    select: false
  },
  resetPasswordExpires: {
    type: Date,
    select: false
  }
},
  {
    timestamps: true
  });



//                      (DB mein kis name se rakhna hai, kis schema k base par run karega)  
export const User = mongoose.model("User", authSchema);
// 'Auth' becomes plural when created in DB 