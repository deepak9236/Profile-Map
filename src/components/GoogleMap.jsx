import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import useGoogleMaps from '../hooks/useGoogleMaps';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const GoogleMapComponent = ({ location }) => {
  const { isLoaded, loadError } = useGoogleMaps();

  if (loadError) {
    console.error('Google Maps Load Error:', loadError);
    return <div className="text-red-500 text-center">Error loading Google Maps.</div>;
  }

  if (!isLoaded) {
    return <div className="text-center text-gray-500">Loading map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={11}
    >
      <Marker position={location} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
