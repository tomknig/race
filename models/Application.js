import mongoose from "mongoose";

const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  projectName: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectGoal: {
    type: String,
    default: null,
  },
  leaderStatement: {
    type: String,
    default: null,
  },
  projectURL: {
    type: String,
    default: null,
  },
  additionalDetails: {
    type: String,
    default: null,
  },
  referrals: {
    type: String,
    defautl: null,
  },
  helpfulLink: {
    type: String,
    default: null,
  },
  evidenceOfExceptionalAbility: {
    type: String,
    default: null,
  },
  founderBackground: {
    type: String,
    default: null,
  },
  pitch: {
    type: String,
    default: null,
  },
  ethAddress: {
    type: String,
    default: null,
  },
  votes: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.models.Application || mongoose.model("Application", ApplicationSchema);
