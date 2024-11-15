import React, { useState, useEffect } from 'react';

const ProfileForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState({});

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPhoto(initialData.photo);
      setDescription(initialData.description);
      setLocation(initialData.location);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: initialData?.id || Date.now().toString(), name, photo, description, location });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} className="input" />

      <label>Photo URL</label>
      <input value={photo} onChange={(e) => setPhoto(e.target.value)} className="input" />

      <label>Description</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="textarea" />

      <label>Location</label>
      <input
        value={location.street || ''}
        onChange={(e) => setLocation({ ...location, street: e.target.value })}
        className="input"
        placeholder="Street"
      />
      {/* Other fields like city, state, and zip can be added similarly */}

      <button type="submit" className="btn btn-primary mt-4">{initialData ? 'Update' : 'Add'} Profile</button>
    </form>
  );
};

export default ProfileForm;
