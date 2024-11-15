// import React from 'react';

// const ProfileCard = ({ profile, onSummaryClick }) => (
  
//   );
  
//   export default ProfileCard;
  
  import { Link } from 'react-router-dom';
import React from 'react'

const ProfileCard = ({ profile, onSummaryClick }) => {
  console.log(profile.photo);
  return (
    <div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
    <img 
      src={profile.photo} 
      alt={profile.name} 
      className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
    />
    <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
    <p className="text-sm text-gray-600 mb-4">{profile.description}</p>
    <Link 
      to={`/profile/${profile.id}`} 
      onClick={() => onSummaryClick(profile)} 
      className="text-blue-500 hover:underline font-medium"
    >
      View Profile
    </Link>
  </div></div>
  )
}

export default ProfileCard
