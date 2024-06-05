import { useLoadScript } from "@react-google-maps/api";
import {
  DashboardContainer,
  MapSection,
  SidebarSection,
} from "./custom.styles";
import { DefaultMarker } from "./DefaultMarker";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_3iiDAdvs5KDTx2fmJbvYYJB-5JG93fw",
    libraries: ["drawing"],
  });

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <DashboardContainer>
          <SidebarSection>
            <div>
              upload function
              <input type="file" name="" id="" />
              <button>Show</button>
            </div>
          </SidebarSection>
          <MapSection>
            <DefaultMarker />
          </MapSection>
        </DashboardContainer>
      )}
    </div>
  );
};

export default App;
