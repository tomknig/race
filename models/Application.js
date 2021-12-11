import mongoose from "mongoose";

const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },

  submissionDate: { type: Date, default: Date.now },

  // copied from Airtable
  projectName: String,
  shortPitch: String,
  extendedPitch: String,
  projectGoals: String,
  leaderStatement: String,
  projectURL: String,
  additionalDetails: String,
  referral: String,
  hasReferral: mongoose.SchemaTypes.Boolean,
  helpfulLinks: String,
  helpfulUploads: mongoose.SchemaTypes.Mixed,
  evidence: String,
  background: String,
  pitch: String,

  ranking: Number,
  votes: Number,

  airtableRecordId: String, // to avoid duplicates
});

module.exports =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
