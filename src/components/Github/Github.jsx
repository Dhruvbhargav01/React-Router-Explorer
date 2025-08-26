
// import React from 'react'
// import { useLoaderData } from 'react-router-dom'
// import './Github.css'

// function Github() {
//   const data = useLoaderData()

//   return (
//     <div className="github-container">
//       <p>Github Name : {data.name}</p>
//       <img src={data.avatar_url} alt="Git Picture" width={300} />
//     </div>
//   )
// }

// export default Github

// export const githubInfoLoader = async () => {
//   const response = await fetch('https://api.github.com/users/Dhruvbhargav01')
//   return response.json()
// }


import { useLoaderData } from 'react-router-dom';
import './Github.css';

function Github() {
  const data = useLoaderData();

  return (
    <div className="github-container">
      <div className="github-card">
        <img className="github-avatar" src={data.avatar_url} alt="GitHub Avatar" />
        <h2>{data.name}</h2>
        {data.login && <p className="github-username">@{data.login}</p>}
        {data.bio && <p className="github-bio">{data.bio}</p>}
        {data.location && <p>Location: {data.location}</p>}
        <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="github-link">
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Dhruvbhargav01');
  return response.json();
};
