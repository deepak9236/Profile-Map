import React, { useContext, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import LoadingIndicator from '../components/LoadingIndicator';
import SearchFilter from '../components/SearchFilter';
import { ProfileContext } from '../context/ProfileContext';

function ProfileList() {
  const { profiles, loading, error } = useContext(ProfileContext);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleSearch = (term) => {
    setFilteredProfiles(
      profiles.filter(profile =>
        profile.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleFilter = (location) => {
    setFilteredProfiles(
      location
        ? profiles.filter(profile => profile.location === location)
        : profiles
    );
  };

  if (loading) return <LoadingIndicator />;
  if (error) return <div className="text-center text-xl text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Profiles</h1>
      <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {filteredProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default ProfileList;
