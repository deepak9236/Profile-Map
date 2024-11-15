import React, { useContext, useState } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import ProfileForm from '../components/ProfileForm';

const AdminDashboard = () => {
  const { profiles, addProfile, updateProfile, deleteProfile } = useContext(ProfileContext);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);

  const handleEditClick = (profile) => {
    setIsEditing(true);
    setCurrentProfile(profile);
  };

  const handleFormSubmit = (profile) => {
    if (isEditing) {
      updateProfile(profile.id, profile);
      setIsEditing(false);
      setCurrentProfile(null);
    } else {
      addProfile(profile);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <ProfileForm onSubmit={handleFormSubmit} initialData={currentProfile} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="p-4 border rounded-lg shadow-lg">
            <h3>{profile.name}</h3>
            <button onClick={() => handleEditClick(profile)}>Edit</button>
            <button onClick={() => deleteProfile(profile.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
