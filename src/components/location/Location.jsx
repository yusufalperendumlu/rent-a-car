import { useState, useEffect } from "react";

export default function Location() {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getLocation() {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;

        const apiLocation = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        const response = await fetch(apiLocation);
        const data = await response.json();

        setLocationData(data);
      } catch (error) {
        setError("Unable to retrieve your location");
      }
    }

    getLocation();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!locationData) {
    return <div>Kaccovv...</div>;
  }

  return (
    <div>
      <p>
        Location: {locationData.city}, {locationData.countryName}
      </p>
    </div>
  );
}
