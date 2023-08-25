import React, { lazy, useCallback, useEffect, useState } from "react";
import Papa from "papaparse";

import DummyData from "./assets/nasa-exoplanet-data.csv";
// import DummyData from "./assets/dummy-data.csv";
import Header from "./components/Header";

const App = () => {
  const [dummyData, setDummyData] = useState([]);

  let planetName = new Set();
  let hostName = new Set();
  let discoveryMethod = new Set();
  let discoveryYear = new Set();
  let discoveryFacility = new Set();

  const fetchParsedData = useCallback(async () => {
    Papa.parse(DummyData, {
      download: true,
      delimiter: ",",
      complete: (result) => {
        setDummyData(result.data);
        console.log(result.data);
      },
    });
  }, []);

  useEffect(() => {
    fetchParsedData();
  }, [fetchParsedData]);

  for (let i = 0; i < dummyData.length; i++) {
    planetName.add(dummyData[i][0]);
    hostName.add(dummyData[i][1]);
    discoveryMethod.add(dummyData[i][2]);
  }

  for (let i = 0; i < dummyData.length; i++) {
    discoveryYear.add(dummyData[i][3]);
  }

  for (let i = 0; i < dummyData.length; i++) {
    discoveryFacility.add(dummyData[i][4]);
  }

  const planetNameArray = Array.from(planetName);
  const hostNameArray = Array.from(hostName);
  const discoveryMethodArray = Array.from(discoveryMethod);
  const discoveryYearArray = Array.from(discoveryYear).sort();
  const discoveryFacilityArray = Array.from(discoveryFacility);

  return (
    <div>
      <Header
        planetNameArray={planetNameArray}
        hostNameArray={hostNameArray}
        discoveryMethodArray={discoveryMethodArray}
        discoveryYearArray={discoveryYearArray}
        discoveryFacilityArray={discoveryFacilityArray}
      />
    </div>
  );
};

export default App;
