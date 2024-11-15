import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "John Doe",
      description: "Software Engineer",
      photo: '/assets/images/john.jpg',
      location: { lat: 51.5074, lng: -0.1278 }, // London, UK
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Graphic Designer",
      photo: "/assets/images/jane.jpg",
      location: { lat: 48.8566, lng: 2.3522 }, // Paris, France
    },
    {
      id: 3,
      name: "Sam Wilson",
      description: "Marketing Specialist",
      photo: "/assets/images/sam.jpg",
      location: { lat: 40.7306, lng: -73.9352 }, // New York City, USA
    },
  ]);
  return (
    <ProfileContext.Provider value={{ profiles }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
