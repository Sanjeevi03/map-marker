import { useLoadScript } from "@react-google-maps/api";
import {
  DashboardContainer,
  MapSection,
  SidebarSection,
} from "./custom.styles";
import { DefaultMarker } from "./DefaultMarker";
import { useState } from "react";
import * as XLSX from 'xlsx';

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
    libraries: ["drawing"],
  });

  const [state, setState] = useState([]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const xlsxData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setState(xlsxData);
    };
    reader.readAsArrayBuffer(file);
  }

  const [ data, setData] = useState()

  const handleSubmit = async () => {
    if(state.length > 0) {
      let final = []
      await state.slice(1).map((i,j) => {
        final.push({
          lat: i[1],
          lng: i[2]
        })
      });
      setData(final)
    }
  }

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <DashboardContainer>
          <SidebarSection>
            <div>
              upload function
              <input type="file" name="file" onChange={handleChange}/>
              <button onClick={handleSubmit}>Show</button>
            </div>
          </SidebarSection>
          <MapSection>
            <DefaultMarker data={data}/>
          </MapSection>
        </DashboardContainer>
      )}
    </div>
  );
};

export default App;
