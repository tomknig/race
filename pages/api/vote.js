import { getSession } from "next-auth/react"
import { vote } from "../../actions/applications"

export default async function(req, res) {
  if(req.method !== 'POST') {
    // Not found
    res.status(404).end();
    return;
  }
  
  const session = await getSession({ req })
  if (session) {
    const applicationId = JSON.parse(req?.body)?.id;
    const voterEmail = session?.user?.email;
    
    if(!applicationId || !voterEmail) {
      // Bad Request
      res.status(400);
    } else {
      vote(applicationId, voterEmail);
    }
  } else {
    // Unauthorized
    res.status(401);
  }
  res.end()
}