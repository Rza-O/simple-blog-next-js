import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';
import React from 'react';

const profile = async () => {
   const { isAuthenticated } = getKindeServerSession();
   console.log(getKindeServerSession())
   const isLoggedIn= await isAuthenticated();
   if (!isLoggedIn) {
      redirect("/api/auth/login");
   }
   return (
      <div>
         this is profile is profilee3ee
      </div>
   );
};

export default profile;