import dbConnect from "../../utils/dbConnect";

// this function upsert a list of records, used for syncing data
export async function upsertApplications(records) {
  await dbConnect();
  const Application = require("../../models/Application");
  const results = [];
  for (const record of records) {
    const { projectName } = record;
    const data = await Application.findOneAndUpdate({ projectName }, record, {
      upsert: true,
    });
    results.push(data);
  }
  return results;
}

// query all applications
export async function getApplications() {
  await dbConnect();
  const Application = require("../../models/Application");
  const data = await Application.find();
  return data;
}

export async function addVote(applicationId, voterEmail) {
  await dbConnect();
  const Application = require("../../models/Application");
  return Application.findOneAndUpdate(
    { _id: applicationId }, 
    { $addToSet: { votes: voterEmail } }
  );
}