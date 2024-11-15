import { useLoadScript } from '@react-google-maps/api';

const useGoogleMaps = () => {
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return { isLoaded, loadError };
};

export default useGoogleMaps;
