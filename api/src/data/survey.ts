import mongoose, { Document, Schema } from "mongoose";

export interface ISurvey extends Document {
  Q1: string;
  Q2: string;
  Q3: string;
}

const SurveySchema: Schema = new Schema<ISurvey>({
  Q1: { type: String, required: true },
  Q2: { type: String, required: true },
  Q3: { type: String, required: true },
});

export default mongoose.model<ISurvey>("Survey", SurveySchema);
