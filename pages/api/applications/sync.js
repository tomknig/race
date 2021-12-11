import { syncAirtableData } from "../../../actions/airtable/sync";

// this endpoint sync airtable to mongodb
export default async function syncAirtable(req, res) {
  try {
    const data = await syncAirtableData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}
