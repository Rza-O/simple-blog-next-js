import React from 'react';
import { NavBar } from './ui/tubelight-navbar';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
   const { getUser } = getKindeServerSession();
   const user = await getUser();
   console.log(user)
   const navItems = [
      { name: 'Home', url: '/' },
      { name: 'Profile', url: '/profile' },
      { name: 'Login', url: '/api/auth/login' },
   ];
   const navItemsSecure = [
      { name: 'Home', url: '/' },
      { name: 'Profile', url: '/profile' },
      { name: 'Logout', url: '/api/auth/logout' },
   ];
   return (
      <div className='min-h-[100px]'>
         <NavBar items={user? navItemsSecure : navItems}></NavBar>
      </div>
   );
};

export default Navbar;