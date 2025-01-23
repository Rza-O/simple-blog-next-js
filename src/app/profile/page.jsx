import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';
import React from 'react';

const profile = async () => {
   const { isAuthenticated } = getKindeServerSession();

   if (!(await isAuthenticated())) {
      redirect("/api/auth/login");
   }

   return <div>Protected content</div>;
};

export default profile;