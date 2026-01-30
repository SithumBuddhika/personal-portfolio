import mongoose, { Schema, InferSchemaType, Model } from "mongoose";

const ProjectSchema = new Schema(
  {
    order: { type: Number, required: true, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }, // e.g. "/assets/project-1.png"
    liveUrl: { type: String, default: "" },
    repoUrl: { type: String, default: "" },
    featured: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export type ProjectDoc = InferSchemaType<typeof ProjectSchema>;

export const Project: Model<ProjectDoc> =
  mongoose.models.Project ||
  mongoose.model<ProjectDoc>("Project", ProjectSchema);
