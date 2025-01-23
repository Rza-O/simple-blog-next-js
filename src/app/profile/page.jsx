import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';
import React from 'react';

const profile = async () => {
   const { isAuthenticated } = getKindeServerSession();
   const authenticated = await isAuthenticated();
   if (!authenticated) {
      redirect("/api/auth/login");
   }
   return (
      <div>
         this is profile is profile
      </div>
   );
};

export default profile;