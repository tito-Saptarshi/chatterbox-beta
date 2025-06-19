import { auth, currentUser } from '@clerk/nextjs/server'
import Link from 'next/link';
export default async function Home() {
  const { userId } = await auth()
  console.log("userId : ", userId);
  
  return (
   <main> 
    <div>
      <div>Link</div>
      <div><Link href={'chat'}>chat page</Link></div>
    </div>
   </main>
  );
}
