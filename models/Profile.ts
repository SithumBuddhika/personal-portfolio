import mongoose, { Schema, InferSchemaType, Model } from "mongoose";

const ProfileSchema = new Schema(
  {
    name: { type: String, required: true },
    countryText: { type: String, default: "Sri Lanka" },
    roles: {
      type: [String],
      default: ["Frontend Developer", "SE Undergraduate", "UI Engineer"],
    },
    resumeUrl: { type: String, default: "" }, // put a Google Drive / Dropbox / your hosted URL
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    whatsapp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export type ProfileDoc = InferSchemaType<typeof ProfileSchema>;

export const Profile: Model<ProfileDoc> =
  mongoose.models.Profile ||
  mongoose.model<ProfileDoc>("Profile", ProfileSchema);
