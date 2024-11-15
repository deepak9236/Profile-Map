import axios from 'axios';

const formatAddress = async (addressObj) => {
  const { lat, lng } = addressObj;

  // OpenCage Geocoding API Key (You can get it from https://opencagedata.com/)
  const apiKey = '68ba5fcb6b9a42379460a9b0c0fe9f17'; 
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const { results } = response.data;
    console.log(results);

    // Check if a result was found
    if (results.length > 0) {
      const { city, state } = results[0].components;
      // console.log(city,state);
      return `${city}, ${state}`;
    } else {
      return 'Location not found';
    }
  } catch (error) {
    console.error('Error fetching address:', error);
    return 'Error fetching location';
  }
};

export default formatAddress;