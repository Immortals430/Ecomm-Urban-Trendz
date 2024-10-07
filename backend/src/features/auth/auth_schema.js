import { model, Schema } from "mongoose";

let authSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatar: {
      type: String,
      default: "image-user.svg",
    },
    avatarUrl: {
      type: String,
      default: "https://firebasestorage.googleapis.com/v0/b/hangouts-41e52.appspot.com/o/avatar%2Favatar-user.svg?alt=media&token=d2342dff-a86b-4b3b-9f79-d1a3b7888e31"
    },
    status: {
      type: String,
      enum: ['single', 'married', 'divorced', 'dating']
    },

    phone: Number,
    address: {
      address: String,
      city: String,
      zip: {
        type: Number,
        minlength: 10000,
        maxlength: 9999999999
      },
      country: String,
    },


    createdAt: {
      type: Date,
      select: false,
    },
    updatedAt: {
      type: Date,
      select: false,
    }
  },
  { timestamps: true }
);

export const Auth = model("auth", authSchema);