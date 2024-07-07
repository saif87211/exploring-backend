import mongoose, { Schema } from "mongoose";

const playListSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    video: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    owner: {
      type: String,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const PlayList = mongoose.model("Playlist", playListSchema);
