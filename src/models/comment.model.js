import mongoose, { Schema, Types } from "mongoose";

const commnetSchema = new Schema(
  {
    content: {
      type: String,
      require: true,
      max: 100,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commnetSchema);
