import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export const DefaultMarker = () => {
  const center = useMemo(() => ({ lat: 15.52043, lng: 73.856743 }), []);

  const data = [
    { lat: 15.52043, lng: 73.856743 },
    { lat: 16.52043, lng: 73.856743 },
    { lat: 17.52043, lng: 73.856743 },
    { lat: 19.52043, lng: 73.856743 },
    { lat: 15.52043, lng: 73.856743 },
  ]
  return (
    <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
      {data.map((i,j) => (
        <div key={j}>
          <Marker position={i} />
      </div>
      ))}
    </GoogleMap>
  );
};
