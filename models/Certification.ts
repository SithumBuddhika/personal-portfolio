import mongoose, { Schema, InferSchemaType, Model } from "mongoose";

const CertificationSchema = new Schema(
  {
    order: { type: Number, required: true, index: true },
    title: { type: String, required: true },
    issuer: { type: String, default: "" }, // e.g., AWS, Google, Meta
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }, // e.g. "/assets/cert-1.png"
    credentialUrl: { type: String, default: "" }, // link to credential
    issuedDate: { type: String, default: "" }, // optional text
    featured: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export type CertificationDoc = InferSchemaType<typeof CertificationSchema>;

export const Certification: Model<CertificationDoc> =
  mongoose.models.Certification ||
  mongoose.model<CertificationDoc>("Certification", CertificationSchema);
