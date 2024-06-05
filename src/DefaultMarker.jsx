import { GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";

export const DefaultMarker = ({data}) => {
  const center = useMemo(() => ({ lat: 15.52043, lng: 73.856743 }), []);

  const [marker, setMarker] = useState([])
  useEffect(() => {
    console.log('render')
    setMarker(data);
  }, [data]);

  console.log('marker', marker)

  return (
    <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
      {marker && marker.map((i,j) => (
        <div key={j}>
          <Marker position={i} />
      </div>
      ))}
    </GoogleMap>
  );
};
