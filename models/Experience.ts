import mongoose, { Schema, InferSchemaType, Model } from "mongoose";

const ExperienceSchema = new Schema(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    logoUrl: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    present: { type: Boolean, default: false },
    description: { type: String, required: true },
    order: { type: Number, required: true, index: true },
  },
  { timestamps: true }
);

export type ExperienceDoc = InferSchemaType<typeof ExperienceSchema>;

export const Experience: Model<ExperienceDoc> =
  mongoose.models.Experience ||
  mongoose.model<ExperienceDoc>("Experience", ExperienceSchema);
