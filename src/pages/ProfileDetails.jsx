import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProfileContext } from "../context/ProfileContext";
import GoogleMapComponent from "../components/GoogleMap";
import formatAddress from "../utils/formatAddress";

const ProfileDetails = () => {
  const { id } = useParams();
  const { profiles } = useContext(ProfileContext);
  const [address, setAddress] = useState('');

  const profileId = parseInt(id, 10);
  const profile = profiles.find((profile) => profile.id === profileId);

  useEffect(() => {
    const fetchAddress = async () => {
      if (profile && profile.location) {
        const formattedAddress = await formatAddress(profile.location);
        setAddress(formattedAddress);
      }
    };

    fetchAddress();
  }, [profile]);

  if (!profile) return <div className="text-center text-xl font-semibold text-gray-500">Profile not found.</div>;

  const { name, photo, description, location } = profile;

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <img src={photo} alt={name} className="w-32 h-32 rounded-full border-2 border-gray-200 mr-6" />
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800">{name}</h2>
          <p className="text-lg text-gray-600 mt-2">{description}</p>
        </div>
      </div>
      <p className="text-xl font-semibold text-gray-700 mb-4">{address || "Loading address..."}</p>
      <div className="rounded-lg overflow-hidden shadow-lg mb-6">
        <GoogleMapComponent location={location} />
      </div>
    </div>
  );
};

export default ProfileDetails;
