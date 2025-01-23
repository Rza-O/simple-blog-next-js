import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import React from "react";

const Profile = async () => {
   // Wrap the session in a try-catch to handle errors
   try {
      const session = getKindeServerSession();
      const authenticated = await session.isAuthenticated();

      // If the user is not authenticated, redirect to login
      if (!authenticated) {
         redirect("/api/auth/login");
      }

      // If authenticated, render the protected content
      return <div>Protected content checking deploy</div>;
   } catch (error) {
      console.error("Authentication error:", error);
      redirect("/api/auth/login"); // Redirect on error
   }
};

export default Profile;
