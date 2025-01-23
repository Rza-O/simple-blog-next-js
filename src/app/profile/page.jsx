import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
   try {
      // Await the session object
      const session = await getKindeServerSession();

      // Log session data for debugging
      console.log("Session data:", session);

      // Check if the session and authentication status are valid
      if (!session || !(await session.isAuthenticated())) {
         console.warn("User is not authenticated. Redirecting to login...");
         redirect("/api/auth/login");
         return null;
      }

      // Render protected content if authenticated
      return <div>Protected content checking deploy again</div>;
   } catch (error) {
      console.error("Authentication error:", error);
      redirect("/api/auth/login"); // Redirect on error
      return null;
   }
};

export default Profile;
