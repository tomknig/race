import Application from "../../../models/Application";
import Author from "../../../models/Author";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const body = req.body;

    let airtableRecordId = body.airtableRecordId;

    let application = await Application.findOne({
      airtableRecordId,
    }).exec();

    if (application) return res.status(200).send(application);

    let authorEmail = body.email;
    let author = await Author.findOne({ email: authorEmail }).exec();
    let authorId;

    if (!author) {
      author = new Author({
        email: authorEmail,
        name: body["Name"],
        ethAddress: body["Ethereum Address"],
        discordUser: body["Discord User"] || "test#1234",
      });
      authorId = await author.save();
    } else {
      console.log("author exists", author);
      authorId = author.id;
    }

    application = new Application({
      author: authorId,
      submissionDate: body.createdTime,

      projectName: body["Project Name"],
      shortPitch: body["Short Pitch"],
      extendedPitch: body["Extended Pitch"],
      projectGoals: body["Project Goals"],
      leaderStatement: body["Leader Statement"],
      projectURL: body["Project URL"],
      additionalDetails: body["Additional Details"],
      referral: body["Referral"],
      hasReferral: body["Has Referal"],
      helpfulLinks: body["Helpful Links"],
      helpfulUploads: body["Helpful uploads"], // This one might be a bit trickier
      evidence:
        body["Please state evidence of exceptional ability for each founder"],
      background: body["Provide some background on each founder"],
      pitch: body["Pitch us your product"],

      // As per discord message, adding some random numbers for testing
      ranking: Math.floor(Math.random() * 100),
      votes: Math.floor(Math.random() * 10),
    });
    let applicationId = await application.save();
    return res.status(201).send(applicationId);
  } else if (req.method === "GET") {
    const applications = await Application.find().exec();
    return res.status(200).send(applications);
  } else {
    res.status(405);
  }
}
