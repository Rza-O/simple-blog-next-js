import axios from 'axios';
import React from 'react';

const Home = async () => {
   const { data } = await axios('https://jsonplaceholder.typicode.com/posts');
   console.log(data)
   return (
      <div>
         <h2 className='text-5xl'>This is home page!</h2>
         <h2>Trying to authenticate with kinde in the deployment</h2>
      </div>
   );
};

export default Home;