// import React from 'react'
// import {useparams} from 'react-router-dom'
// function User() {
//     const {userid} =useparams()
//   return (
//     <div className='bg-gray-600 text-white text-3xl p-4'>
//       User : {userid}
//     </div>
//   )
// }

// export default User

import React from "react";
import { useParams } from "react-router-dom"; // ✅ Correct import
import "./User.css"; // ✅ Linking CSS

function User() {
  const { userid } = useParams(); // ✅ Correct hook name

  return (
    <div className="user-container">
      User : {userid}
    </div>
  );
}

export default User;
