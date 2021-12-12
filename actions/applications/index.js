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
export async function getApplications(email) {
  await dbConnect();
  const Application = require("../../models/Application");
  const data = await Application.aggregate([
    {
      $addFields: {
        // Add the vote count to the application
        voteCount: { $size: "$votes" },

        // Indicate if user has alredy voted based on email
        hasUserUpvoted: email ? { $in: [email, "$votes"] } : false
      }
    },

    // Don't making emails of voters public
    { $unset: "votes" },

    // Sort by most votes first
    { $sort: { voteCount: -1 } }
  ]);
  return data;
}

export async function addVote(applicationId, voterEmail) {
  await dbConnect();
  const Application = require("../../models/Application");
  return Application.findOneAndUpdate(
    // Find application by Id
    { _id: applicationId }, 

    // Add to set so the same email will not be added twice
    { $addToSet: { votes: voterEmail } }
  );
}