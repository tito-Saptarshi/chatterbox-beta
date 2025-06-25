import { StreamChat } from "stream-chat";
import { auth } from '@clerk/nextjs/server'

const api_key = "8wu5wsn9bmst";
const api_secret = "7tm5d6rn4qbysfjgga6zawh357gph5d2v2dxyp94tmxp65y6t8j9q3rq5huh2ef7";
const user_id = "user_2yk0qnV6gCpk4r0IDVQi8qe2Jgd";


export async function GET() {

   const { userId } = await auth();
   console.log(userId);
   

  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const token = serverClient.createToken(user_id);

  console.log("serverClient " + serverClient);
  console.log("token " + token);
  
  return Response.json({ message: 'Hello World' })
}